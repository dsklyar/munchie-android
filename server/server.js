'use strict'

const express = require('express'),
  expressGraphQL = require('express-graphql'),
  mongoose = require('mongoose'),
  app = express(),
  schema = require('./schema/schema'),
  scraper = require('./scraper/index');

const MONGO_URI = 'mongodb://SummerInLandunish:soire@ds046267.mlab.com:46267/lake';
// Mongoose's built in promise library is deprecated, replace it with ES2015 Promise
mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to the database'))
  .on('error', error => console.log('Error occured when connecting to the database'));


// Instruct Express to pass on any request made to the '/graphql' route
// to the GraphQL instance. 
app.use('/graphql', expressGraphQL({
  schema, // same as schema : schema es6
  graphiql: true
}));

//setInterval(scraper,1500); // Loop it
setTimeout(scraper,1500);

module.exports = app;