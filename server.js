const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const errorhandler = require('errorhandler');

const apiRouter = require('./api/api');

const app = express();
const PORT = process.env.PORT || 4000;


app.use(bodyParser.json());
app.use(cors());


// morgan for verifying status codes and hunting errors.

// const morgan = require('morgan');
// app.use(morgan('dev'));


//router to api.js
app.use('/api', apiRouter);

app.use(errorhandler());


app.listen (PORT, () => {
  console.log(`Listening from Port ${PORT}.`);
});

module.exports = app;


//All the best intentions for taking notes throughout. That ended quickly.
