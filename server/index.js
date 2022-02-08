const express = require('express');
const cors = require('cors');
const connectDB = require('./startup/db');
// const temps = require('./routes/temps');
// const volumes = require('./routes/volumes');



const app = express();

connectDB();

app.use(cors());
app.use(express.json());
// app.use('/api/temp', temps);
// app.use('/api/volume', volumes);

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
