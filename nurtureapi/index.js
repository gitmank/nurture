// imports
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const { validateToken } = require('./utilities/middleware');
const { getAssessment } = require('./utilities/dataController');
const corsConfig = require('./utilities/cors-config');

// initialize express app
const app = express();

// middleware
app.use(cors(corsConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
  res.end('Hi there! This is the Nurture API.');
})

// public routes
app.get('/assessment/:type', (req, res) => getAssessment(req, res))

// all private routes beyond this point
app.use((req, res, next) => validateToken(req, res, next));

// listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});