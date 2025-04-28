// Script to seed 15 dummy student login records
const mongoose = require('mongoose');
const StudentLogin = require('./StudentLogin');

mongoose.connect('mongodb://127.0.0.1:27017/unisitedb')
  .then(async () => {
    const students = [];
    for (let i = 1; i <= 15; i++) {
      students.push({
        applicationId: `PU10${i.toString().padStart(2, '0')}`,
        password: 'pass123',
      });
    }
    await StudentLogin.deleteMany({}); // Clear old data
    await StudentLogin.insertMany(students);
    console.log('Seeded student logins');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Seeding failed:', err);
    mongoose.disconnect();
  });
