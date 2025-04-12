// Import required modules
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const { google } = require('googleapis');
const XLSX = require('xlsx');
const fs = require('fs');
const mongoose = require('mongoose');
const ExcelJS = require('exceljs');
const path = require('path');

const app = express();
const PORT = 9000;
const JWT_SECRET = 'your_secret_key';

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/unisitedb')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Mongoose Schema and Model
const registerSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  phone: String,
  email: { type: String, unique: true },
  rollno: { type: String, unique: true },
  dob: String,
  gender: String,
  batch: String,
  degree: String,
  password: String,
  usertype: String,
}, { versionKey: false });

const registerModel = mongoose.model('register', registerSchema, 'register');

// Generate JWT Token
const generateToken = (user) => jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

// Multer Configuration for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// ----------------- ROUTES ----------------- //

// Register API
app.post('/api/register', async (req, res) => {
  try {
    const newUser = new registerModel({ ...req.body, password: req.body.pass, usertype: 'normal' });
    await newUser.save();
    res.status(200).send({ statuscode: 1, msg: 'Registration Successful' });
  } catch (err) {
    console.error('Error during registration:', err);
    res.status(500).send({ statuscode: 0, msg: 'Registration failed' });
  }
});

// Login API
app.post('/api/login', async (req, res) => {
  try {
    const user = await registerModel.findOne({ email: req.body.email });
    if (!user || user.password !== req.body.pass) {
      return res.status(401).send({ statuscode: 0, msg: 'Invalid Credentials' });
    }
    const token = generateToken(user);
    res.status(200).send({
      statuscode: 1,
      token,
      user: {
        firstname: user.firstname,
        email: user.email,
        rollno: user.rollno,
        batch: user.batch,
      },
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send({ statuscode: 0, msg: 'Login failed' });
  }
});

// Google Sheets Config
const SHEET_ID = '1KovDCzAa3gsCJJRBTZl-KOeMMc8c3N3RhGYa_6RpwXY';
const RANGE = 'Sheet1!A1:Z1000';
const API_KEY = 'AIzaSyCk5bsdzRNAge9OGWhubV7PSTrMb7ozzjc';

// Fetch All Data from Google Sheets
app.get('/api/form-responses', async (req, res) => {
  try {
    const sheets = google.sheets({ version: 'v4', auth: API_KEY });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: RANGE,
    });
    const rows = response.data.values;
    if (!rows || rows.length === 0) return res.status(404).send('No data found.');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching sheet:', err);
    res.status(500).send('Error fetching data');
  }
});

// Filter Students from Google Sheets and Download Excel
// app.post('/api/filter-students', async (req, res) => {
//   try {
//     console.log('Received filter request:', req.body);
//     const { tenthMarks, twelfthMarks, cgpa, backlogs, jeePercentile, relocate } = req.body;

//     // Validate input
//     if (tenthMarks === undefined || twelfthMarks === undefined || cgpa === undefined) {
//       return res.status(400).json({ message: 'Missing required filter criteria' });
//     }

//     const sheets = google.sheets({ version: 'v4', auth: API_KEY });
//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId: SHEET_ID,
//       range: RANGE,
//     });

//     const rows = response.data.values;
//     if (!rows || rows.length === 0) {
//       return res.status(404).json({ message: 'No data found in Google Sheet' });
//     }

//     const header = rows[0];
//     const dataRows = rows.slice(1);

//     // Helper function to find column index
//     const getIndex = (label) => {
//       const index = header.findIndex((h) => h.toLowerCase().includes(label.toLowerCase()));
//       if (index === -1) {
//         console.warn(`Column not found: ${label}`);
//       }
//       return index;
//     };

//     console.log('Filtering students with criteria:', { tenthMarks, twelfthMarks, cgpa });

//     const filtered = dataRows.filter((row) => {
//       // Get column indices
//       const tenthIndex = getIndex('10th marks');
//       const twelfthIndex = getIndex('12th marks');
//       const cgpaIndex = getIndex('Overall CGPA');
//       const backlogsIndex = getIndex('Active backlogs status');
//       const jeeIndex = getIndex('JEE');
//       const relocateIndex = getIndex('Relocate');

//       // Parse values with validation
//       const t10 = parseFloat(row[tenthIndex]) || 0;
//       const t12 = parseFloat(row[twelfthIndex]) || 0;
//       const cgpaVal = parseFloat(row[cgpaIndex]) || 0;
//       const backlogVal = (row[backlogsIndex] || '').toLowerCase();
//       const jeeVal = parseFloat(row[jeeIndex]) || 0;
//       const relocateVal = (row[relocateIndex] || '').toLowerCase();

//       console.log('Checking student:', { t10, t12, cgpaVal, backlogVal });

//       return (
//         t10 >= tenthMarks &&
//         t12 >= twelfthMarks &&
//         cgpaVal >= cgpa &&
//         backlogVal === 'no' &&
//         (jeePercentile ? jeeVal >= jeePercentile : true) &&
//         (relocate ? relocateVal === relocate.toLowerCase() : true)
//       );
//     });

//     console.log(`Found ${filtered.length} matching students`);

//     if (filtered.length === 0) {
//       return res.status(404).json({ message: 'No students match the filter criteria' });
//     }

//     // Create workbook and add worksheet
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet('Filtered Students');

//     // Add metadata
//     workbook.creator = 'Placement Cell';
//     workbook.created = new Date();

//     // Add headers with styling
//     worksheet.addRow(header);
//     const headerRow = worksheet.getRow(1);
//     headerRow.font = { bold: true, size: 12 };
//     headerRow.fill = {
//       type: 'pattern',
//       pattern: 'solid',
//       fgColor: { argb: 'FFE0E0E0' }
//     };
//     headerRow.alignment = { vertical: 'middle', horizontal: 'center' };

//     // Add data rows with proper formatting
//     filtered.forEach(row => {
//       const dataRow = worksheet.addRow(row);
//       dataRow.alignment = { vertical: 'middle', horizontal: 'left' };
      
//       // Format numeric columns
//       const numericColumns = ['10th marks', '12th marks', 'Overall CGPA', 'JEE'];
//       numericColumns.forEach(colName => {
//         const colIndex = getIndex(colName) + 1;
//         if (colIndex > 0) {
//           const cell = dataRow.getCell(colIndex);
//           cell.numFmt = '0.00';
//         }
//       });
//     });

//     // Auto-fit columns and add borders
//     worksheet.columns.forEach((column, i) => {
//       let maxLength = 0;
//       column.eachCell({ includeEmpty: true }, (cell) => {
//         const columnLength = cell.value ? cell.value.toString().length : 10;
//         if (columnLength > maxLength) {
//           maxLength = columnLength;
//         } 
//       });
//       column.width = Math.min(Math.max(maxLength + 2, 10), 50); // Min 10, Max 50
      
//       // Add borders to all cells
//       worksheet.eachRow((row) => {
//         const cell = row.getCell(i + 1);
//         cell.border = {
//           top: { style: 'thin' },
//           left: { style: 'thin' },
//           bottom: { style: 'thin' },
//           right: { style: 'thin' }
//         };
//       });
//     });

//     try {
//       console.log('Generating Excel buffer...');
//       const buffer = await workbook.xlsx.writeBuffer();
//       console.log('Buffer generated, size:', buffer.length);

//       // Set headers for file download
//       res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
//       res.setHeader('Content-Disposition', `attachment; filename=filtered_students_${new Date().toISOString().split('T')[0]}.xlsx`);
//       res.setHeader('Content-Length', buffer.length);
//       res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
//       res.setHeader('Pragma', 'no-cache');
//       res.setHeader('Expires', '0');

//       // Send buffer
//       res.end(buffer);
//       console.log('Excel file sent successfully');
//     } catch (error) {
//       console.error('Error generating Excel file:', error);
//       res.status(500).json({ message: `Error generating Excel file: ${error.message}` });
//     }
//   } catch (err) {
//     console.error('Error in filter-students endpoint:', err);
//     res.status(500).json({ 
//       message: 'Error filtering students',
//       error: err.message 
//     });
//   }
// });

// Filter Students from Uploaded Excel File
app.post('/api/filter-excel', upload.single('excel'), async (req, res) => {
  try {
    const filters = JSON.parse(req.body.filters);
    const filePath = req.file.path;

    // Read uploaded Excel file
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Apply filters
    const filtered = data.filter(student => {
      const tenth = parseFloat(student['10th marks (in %age)']) || 0;
      const twelfth = parseFloat(student['12th marks (in %age)']) || 0;
      const cgpa = parseFloat(student['Overall CGPA till 6th Sem (average)']) || 0;
      const backlogs = parseInt(student['Total number of backlogs (if any)']) || 0;

      return (
        tenth >= filters.tenth &&
        twelfth >= filters.twelfth &&
        cgpa >= filters.cgpa &&
        backlogs <= filters.backlogsAllowed
      );
    });

    // Create a new Excel file with filtered data
    const newWorkbook = new ExcelJS.Workbook();
    const worksheet = newWorkbook.addWorksheet('Filtered Students');

    if (filtered.length > 0) {
      worksheet.columns = Object.keys(filtered[0]).map(key => ({
        header: key,
        key: key,
        width: 20,
      }));

      filtered.forEach(student => {
        worksheet.addRow(student);
      });
    } else {
      worksheet.addRow(['No matching students found']);
    }

    // Save new workbook to a buffer
    const buffer = await newWorkbook.xlsx.writeBuffer();

    // Set headers and send file
    res.setHeader('Content-Disposition', 'attachment; filename=filtered_students.xlsx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buffer);

    // Delete the uploaded file after processing
    fs.unlinkSync(filePath);
  } catch (error) {
    console.error('Error during Excel filtering:', error);
    res.status(500).json({ error: 'Failed to process Excel file.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log("🚀 Server running at port " + PORT);
});