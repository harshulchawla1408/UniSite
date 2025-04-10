// const express = require('express');
// const app = express();
// const port = 9000;
// const cors = require('cors');
// const multer = require('multer');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const { google } = require('googleapis');
// const XLSX = require('xlsx');
// const formidable = require('formidable');
// const fs = require('fs');
// const mongoose = require('mongoose');

// // Middleware
// app.use(cors());
// app.use(express.json());

// // JWT Secret Key
// const JWT_SECRET = 'your_secret_key';

// // MongoDB connection
// mongoose.connect('mongodb://127.0.0.1:27017/unisitedb')
//   .then(() => console.log('Connected to MongoDB!'));

// // Google Sheet Config
// const SHEET_ID = '1KovDCzAa3gsCJJRBTZl-KOeMMc8c3N3RhGYa_6RpwXY';
// const RANGE = 'Sheet1!A1:Z1000';
// const API_KEY = 'AIzaSyCk5bsdzRNAge9OGWhubV7PSTrMb7ozzjc';

// // Multer config (in case you want to support file uploads later)
// const mystorage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'public/uploads'),
//   filename: (req, file, cb) => cb(null, Date.now() + file.originalname)
// });
// // const upload = multer({ storage: mystorage });

// // Mongoose Schema
// const registerSchema = mongoose.Schema({
//   firstname: String,
//   lastname: String,
//   phone: String,
//   email: { type: String, unique: true },
//   rollno: { type: String, unique: true },
//   dob: String,
//   gender: String,
//   batch: String,
//   degree: String,
//   password: String,
//   usertype: String,
// }, { versionKey: false });

// const registerModel = mongoose.model('register', registerSchema, 'register');

// // Generate JWT Token
// const generateToken = (user) => jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

// // -------- ROUTES -------- //

// // Register API
// app.post('/api/register', async (req, res) => {
//   try {
//     const newUser = new registerModel({ ...req.body, password: req.body.pass, usertype: 'normal' });
//     await newUser.save();
//     res.status(200).send({ statuscode: 1, msg: 'Registration Successful' });
//   } catch (err) {
//     console.error('Error during registration:', err);
//     res.status(500).send({ statuscode: 0, msg: 'Registration failed' });
//   }
// });

// // Login API
// app.post('/api/login', async (req, res) => {
//   try {
//     const user = await registerModel.findOne({ email: req.body.email });
//     if (!user || user.password !== req.body.pass) {
//       return res.status(401).send({ statuscode: 0, msg: 'Invalid Credentials' });
//     }
//     const token = generateToken(user);
//     res.status(200).send({
//       statuscode: 1,
//       token,
//       user: {
//         firstname: user.firstname,
//         email: user.email,
//         rollno: user.rollno,
//         batch: user.batch,
//       },
//     });
//   } catch (err) {
//     console.error('Error during login:', err);
//     res.status(500).send({ statuscode: 0, msg: 'Login failed' });
//   }
// });

// // Google Sheets - Fetch All Data
// app.get('/api/form-responses', async (req, res) => {
//   try {
//     const sheets = google.sheets({ version: 'v4', auth: API_KEY });
//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId: SHEET_ID,
//       range: RANGE,
//     });
//     const rows = response.data.values;
//     if (!rows || rows.length === 0) return res.status(404).send('No data found.');
//     res.json(rows);
//   } catch (err) {
//     console.error('Error fetching sheet:', err);
//     res.status(500).send('Error fetching data');
//   }
// });



// import express from 'express';
// import multer from 'multer';
// import ExcelJS from 'exceljs';
// import cors from 'cors';
// import fs from 'fs';

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// app.use(cors());
// app.use(express.json());

// app.post('/filter-excel', upload.single('excel'), async (req, res) => {
//   const { path } = req.file;
//   const { tenth, twelfth, cgpa } = JSON.parse(req.body.filters);

//   const workbook = new ExcelJS.Workbook();
//   await workbook.xlsx.readFile(path);
//   const worksheet = workbook.worksheets[0];

//   const headers = worksheet.getRow(1).values;

//   const getColumnIndex = (name) =>
//     headers.findIndex((h) => h && h.toString().toLowerCase().includes(name.toLowerCase()));

//   const tenthIndex = getColumnIndex('10th marks');
//   const twelfthIndex = getColumnIndex('12th marks');
//   const cgpaIndex = getColumnIndex('Overall CGPA');
//   const backlogIndex = getColumnIndex('Active backlogs status');

//   const filteredRows = [];
//   worksheet.eachRow((row, rowNumber) => {
//     if (rowNumber === 1) {
//       filteredRows.push(row.values); // Add header row
//       return;
//     }

//     const tenthVal = parseFloat(row.getCell(tenthIndex).value);
//     const twelfthVal = parseFloat(row.getCell(twelfthIndex).value);
//     const cgpaVal = parseFloat(row.getCell(cgpaIndex).value);
//     const backlogVal = row.getCell(backlogIndex).value?.toString().toLowerCase();

//     if (
//       tenthVal >= tenth &&
//       twelfthVal >= twelfth &&
//       cgpaVal >= cgpa &&
//       backlogVal === 'no'
//     ) {
//       filteredRows.push(row.values);
//     }
//   });

//   // Create new workbook for filtered data
//   const filteredWorkbook = new ExcelJS.Workbook();
//   const filteredSheet = filteredWorkbook.addWorksheet('Filtered Students');

//   filteredRows.forEach((row) => {
//     filteredSheet.addRow(row.slice(1)); // remove first undefined index
//   });

//   const buffer = await filteredWorkbook.xlsx.writeBuffer();

//   fs.unlinkSync(path); // delete uploaded file after processing

//   res.setHeader('Content-Disposition', 'attachment; filename=filtered_students.xlsx');
//   res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
//   res.send(buffer);
// });

// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });

// // Start Server
// app.listen(port, () => {
//   console.log(`🚀 Server running at http://localhost:${port}`);
// });

// module.exports = app;
const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { google } = require('googleapis');
const XLSX = require('xlsx');
const fs = require('fs');
const mongoose = require('mongoose');
const ExcelJS = require('exceljs');

// Middleware
app.use(cors());
app.use(express.json());

// JWT Secret Key
const JWT_SECRET = 'your_secret_key';

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/unisitedb')
  .then(() => console.log('Connected to MongoDB!'));

// Multer config
const upload = multer({ dest: 'uploads/' });

// Mongoose Schema
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

// -------- ROUTES -------- //

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

// Google Sheets - Fetch All Data
const SHEET_ID = '1KovDCzAa3gsCJJRBTZl-KOeMMc8c3N3RhGYa_6RpwXY';
const RANGE = 'Sheet1!A1:Z1000';
const API_KEY = 'AIzaSyCk5bsdzRNAge9OGWhubV7PSTrMb7ozzjc';

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

// Filter Students and Download Excel
app.post('/api/filter-students1', async (req, res) => {
  try {
    const { tenthMarks, twelfthMarks, cgpa, backlogs, jeePercentile, relocate } = req.body;

    const sheets = google.sheets({ version: 'v4', auth: API_KEY });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) return res.status(404).send('No data found.');

    const header = rows[0];
    const dataRows = rows.slice(1);

    const getIndex = (label) =>
      header.findIndex((h) => h.toLowerCase().includes(label.toLowerCase()));

    const filtered = dataRows.filter((row) => {
      const t10 = parseFloat(row[getIndex('10th marks')] || 0);
      const t12 = parseFloat(row[getIndex('12th marks')] || 0);
      const cgpaVal = parseFloat(row[getIndex('Overall CGPA')] || 0);
      const backlogVal = (row[getIndex('Active backlogs status')] || '').toLowerCase();
      const jeeVal = parseFloat(row[getIndex('JEE')] || 0);
      const relocateVal = (row[getIndex('Relocate')] || '').toLowerCase();

      return (
        t10 >= tenthMarks &&
        t12 >= twelfthMarks &&
        cgpaVal >= cgpa &&
        backlogVal === 'no' &&
        (jeePercentile ? jeeVal >= jeePercentile : true) &&
        (relocate ? relocateVal === relocate.toLowerCase() : true)
      );
    });

    // Excel sheet generation
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Filtered Students');

    sheet.addRow(header);
    filtered.forEach((row) => sheet.addRow(row));

    const buffer = await workbook.xlsx.writeBuffer();

    res.setHeader('Content-Disposition', 'attachment; filename=filtered_students.xlsx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buffer);
  } catch (err) {
    console.error('Error filtering students:', err);
    res.status(500).send('Error filtering students');
  }
});
// Express backend for filtering student data from uploaded Excel file
const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Helper function to apply filters
function applyFilters(data, filters) {
  return data.filter(student => {
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
}

app.post('/filter-excel', upload.single('excel'), (req, res) => {
  const filters = JSON.parse(req.body.filters);
  const filePath = req.file.path;

  try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const filtered = applyFilters(data, filters);

    const newWorkbook = XLSX.utils.book_new();
    const newSheet = XLSX.utils.json_to_sheet(filtered);
    XLSX.utils.book_append_sheet(newWorkbook, newSheet, 'Filtered Data');

    const outPath = path.join(__dirname, 'filtered_students.xlsx');
    XLSX.writeFile(newWorkbook, outPath);

    res.download(outPath, 'filtered_students.xlsx', (err) => {
      if (err) {
        console.error('Error in sending file:', err);
        res.status(500).send('Failed to download file');
      }
      fs.unlinkSync(filePath);
      fs.unlinkSync(outPath);
    });
  } catch (err) {
    console.error('Error during filtering:', err);
    res.status(500).send('Something went wrong while processing the file');
  }
});

// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });
// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
