require('dotenv').config();

const mongoose = require('mongoose');

async function connectDB() {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is missing. Check your .env file.');
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected!');
  } catch (err) {
    console.error('Connection failed:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;