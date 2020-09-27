const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('DB connected successfully!'))
  .catch((err) => console.log(err.message));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes'));

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
