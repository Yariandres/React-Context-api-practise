const express = require('express');
const connectDB = require('./config/db.js');
const bodyParser = require('body-parser');

const app = express();
// CONNECT TO DATABASE
connectDB();

app.use(bodyParser.json());

// ROUTES
// const weather = require('./routes/weather');
// app.use('/weather', weather);

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on: ${PORT}`));


