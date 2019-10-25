'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

// connect it to a mongoose database--Run mongo daemon in the background
const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

require('./src/app.js').start(process.env.PORT);
