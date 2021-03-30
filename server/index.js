const express = require('express');
const path = require('path');
const cors = require('cors');
const seeder = require('./seeder/seed');
// DB configuration and interaction with our MongoDb database
const mongoose = require('mongoose');

const db = require('./config').mongoURI;

// I initialize the app with Express
const app = express();

// // Test
app.get('/', (req, res) => res.send('API Running'));
// app.get('/api/products', (req, res) => res.send('API Running'));

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connection to Mongo DB estabilished'))
  .catch((err) => console.log(err));

// Init Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/products', require('./routes/api/products'));
app.use('/api/women', require('./routes/api/women'));

// Set static folder
// app.use(express.static('client/build'));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
