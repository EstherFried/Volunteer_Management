require('dotenv').config();
const mongoose = require('mongoose');

async function mongooseConnect() {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log('Connected to DB_NE'); 
}

module.exports = mongooseConnect; 