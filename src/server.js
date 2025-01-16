require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB', err));

app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from Node.js API');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
