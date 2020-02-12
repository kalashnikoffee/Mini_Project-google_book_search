const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

require('dotenv').config();

// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

/*
// Connect to Atlas MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() =>
    console.log('Google book search mini project Atlas MongoDB Connected!')
  );


*/

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() =>
    console.log('Google book search mini project MongoDB Connected!')
  );

mongoose.connection.on('err', err => {
  console.log(
    `Google book search mini project Atlas MongoDB connection error: ${err.message} `
  );
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
