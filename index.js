const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// ROUTES
const weather = require('./routes/weather');
app.use('/weather', weather);

// mongodb+srv://Admin:<password>@weathercluss-ph8xt.mongodb.net/test?retryWrites=true&w=majority

