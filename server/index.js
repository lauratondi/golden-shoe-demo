const express = require('express');
const path = require('path');
const seeder = require('./seeder/seed');
const app = express();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// DB configuration and interaction with our MongoDb database
const db = require('./config').mongoURI;
const mongoose = require('mongoose');

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection to Mongo DB estabilished'))
  .catch((err) => console.log(err));
