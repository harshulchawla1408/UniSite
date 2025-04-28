// StudentLogin.js
const mongoose = require('mongoose');

const studentLoginSchema = new mongoose.Schema({
  applicationId: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  usertype: { type: String, enum: ['student', 'admin'], default: 'student' }
});

const StudentLogin = mongoose.model('StudentLogin', studentLoginSchema);

module.exports = StudentLogin;
