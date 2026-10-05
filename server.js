const express = require('express');
const connectDB = require('./config/db');
const Student = require('./models/Student');

const app = express();

app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Save a student
app.post('/students', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Retrieve all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Connect to MongoDB before starting the server
async function startServer() {
  try {
    await connectDB();

    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  } catch (err) {
    console.error('Server startup failed:', err.message);
    process.exit(1);
  }
}

startServer();