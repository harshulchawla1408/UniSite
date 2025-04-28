const mongoose = require('mongoose');
const StudentLogin = require('./StudentLogin');

mongoose.connect('mongodb://127.0.0.1:27017/unisitedb')
  .then(async () => {
    const admins = [];
    for (let i = 1; i <= 5; i++) {
      admins.push({
        applicationId: `ADMIN0${i}`,
        password: 'adminpass',
        usertype: 'admin',
      });
    }
    await StudentLogin.deleteMany({ usertype: 'admin' }); // Clear old admin data
    await StudentLogin.insertMany(admins);
    console.log('Seeded admin logins');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Seeding failed:', err);
    mongoose.disconnect();
  });
