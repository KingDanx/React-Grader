const express = require('express');
const cors = require('cors');
const connectDB = require('./startup/db');
const students = require('./routes/students');
const tests = require('./routes/tests');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/students', students);
app.use('/api/tests', tests);

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
