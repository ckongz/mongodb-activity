const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  hobbies: [String],
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);