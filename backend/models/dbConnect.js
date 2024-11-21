const mongoose = require('mongoose');

const DB = 'mongodb://127.0.0.1:27017/google-auth';
console.log('DB--', DB);
mongoose
    .connect(DB)
    .then(() => {
        console.log('DB connection established');
    })
    .catch((err) => {
        console.log('DB CONNECTION FAILED');
        console.log('ERR: ', err);
    });