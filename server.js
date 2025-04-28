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


// --- StudentLogin Model ---
const StudentLogin = require('./src/Components/StudentLogin');

// Generate JWT Token
const generateToken = (user) => jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Login API
app.post('/api/login', async (req, res) => {
  try {
    console.log('Login request body:', req.body);
    if (req.body.applicationId && req.body.password) {
      const user = await StudentLogin.findOne({ applicationId: req.body.applicationId });
      console.log('User found:', user);
      if (user && user.password === req.body.password) {
        return res.status(200).send({
          statuscode: 1,
          msg: 'Login Successful',
          user: {
            applicationId: user.applicationId,
            usertype: user.usertype || 'student',
          }
        });
      } else {
        return res.status(401).send({ statuscode: 0, msg: 'Invalid Credentials' });
      }
    }
    return res.status(400).send({ statuscode: 0, msg: 'Missing credentials' });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send({ statuscode: 0, msg: 'Login failed' });
  }
});

// API to list all users (students & admins)
app.get('/api/users', async (req, res) => {
  try {
    const users = await StudentLogin.find({}, '-password'); // Exclude password
    res.json(users);
  } catch (err) {
    res.status(500).send({ msg: 'Failed to fetch users' });
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
app.post('/api/filter-excel', upload.single('excel'), async (req, res) => {
  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(req.file.buffer);
    const worksheet = workbook.worksheets[0];

    // Read data into JSON
    const jsonData = [];
    const headers = [];

    // Sanitize and log headers
    worksheet.getRow(1).eachCell({ includeEmpty: true }, (cell, colNumber) => {
      const cleanHeader = cell.text.replace(/\s+/g, ' ').trim();
      headers.push(cleanHeader);
    });

    console.log('🧠 Headers:', headers);

    worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
      if (rowNumber === 1) return;
      const rowData = {};
      row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
        rowData[headers[colNumber - 1]] = cell.text.trim();
      });
      jsonData.push(rowData);
    });

    if (jsonData.length > 0) {
      console.log('📄 Sample row:', jsonData[0]);
    }

    const filters = JSON.parse(req.body.filters);
    console.log('🔍 Filters received:', filters);

    // Apply filters
    const filtered = jsonData.filter((row) => {
      const tenth = parseFloat(row['10th marks (in %age)']) || 0;
      const twelfth = parseFloat(row['12th marks (in %age)']) || 0;
      const cgpa = parseFloat(row['Overall CGPA till 6th Sem (Take average of all CGPAs)']) || 0;
      const hasBacklogs = row['Do you currently have any active backlogs?']?.toLowerCase() === 'yes';

      return (
        tenth >= filters.tenth &&
        twelfth >= filters.twelfth &&
        cgpa >= filters.cgpa &&
        (filters.backlogsAllowed === 'Yes' || !hasBacklogs)
      );
    });

    console.log(`✅ Filtered ${filtered.length} students`);

    // Create new workbook to return
    const newWorkbook = new ExcelJS.Workbook();
    const newSheet = newWorkbook.addWorksheet('Filtered');

    if (filtered.length > 0) {
      newSheet.columns = Object.keys(filtered[0]).map(key => ({
        header: key,
        key: key,
        width: 25
      }));
      filtered.forEach(row => {
        newSheet.addRow(row);
      });
    } else {
      newSheet.addRow(['No matching students found']);
    }

    // Generate buffer and send response
    const buffer = await newWorkbook.xlsx.writeBuffer();
    res.setHeader('Content-Disposition', 'attachment; filename=filtered_students.xlsx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buffer);

  } catch (error) {
    console.error('❌ Error filtering Excel:', error);
    res.status(500).json({ error: 'Failed to process Excel file.' });
  }
});

app.listen(PORT, () => {
  console.log("🚀 Server running at port " + PORT);
});