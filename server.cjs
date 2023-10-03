require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// Connect to database
require("./config/database.cjs");

const app = express();

// Middleware
// logger middleware to log request 
app.use(logger('dev'));
// middleware to parse incoming JSON data
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'dist')));

// checkToken Middleware. (Sets the req.user & req.exp properties on the request object)
app.use(require('./config/checkToken.cjs'));


// Put API routes here, before the "catch all" route
app.get('/api/test', (req, res) => {
  res.send('You Just hit a API route')
});

const userRouter = require("./routes/api/users.cjs")
//Router setup
// If the request starts with /api/users/ it directs the request to the userRouter(line 28)
app.use('/api/users', userRouter);


// events api
const events = require('./routes/api/events.cjs');
app.use('/api/events', events);
// app.use('/api/events', require('./routes/api/events.cjs'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });



const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});




// W13D4 w14d1notes 

// require('dotenv').config();
// const express = require('express');
// const path = require('path');
// const favicon = require('serve-favicon');
// const logger = require('morgan');

// // Connect to database
// require("./config/database.cjs");

// const app = express();

// // Middleware
// // logger middleware to log request 
// app.use(logger('dev'));
// // middleware to parse incoming JSON data
// app.use(express.json());

// // Configure both serve-favicon & static middleware
// // to serve from the production 'build' folder
// // app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'dist')));


// // Put API routes here, before the "catch all" route



// // The following "catch all" route (note the *) is necessary
// // to return the index.html on all non-AJAX requests
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
//   });



// const port = process.env.PORT || 3001;

// app.listen(port, function() {
//   console.log(`Express app running on port ${port}`)
// });