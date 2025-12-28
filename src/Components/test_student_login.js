// Quick test script to verify StudentLogin model data
const mongoose = require('mongoose');
const StudentLogin = require('./StudentLogin');

mongoose.connect('mongodb://127.0.0.1:27017/unisitedb')
  .then(async () => {
    const students = await StudentLogin.find();
    console.log('StudentLogin records:', students);
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Test failed:', err);
    mongoose.disconnect();
  });
