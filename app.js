// THIRD PARTY LIBRARY
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

const port = process.env.PORT || 3000;

// APP
let app = express();

// IMPORT ROUTES 
const postsRoute = require('./routes/posts');

// MIDDLWARE
app.use(bodyParser.json());
app.use('/courses', postsRoute);
app.use(cors());

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION3,
{ 
  useNewUrlParser: true,
  useUnifiedTopology: true 
},
(err) => {
  if(err) {
      return console.log('Problem with connection');
  }

  console.log('connected to DB');
});

// LISTNER
app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});