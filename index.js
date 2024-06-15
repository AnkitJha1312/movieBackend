const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 8000;
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./db');

app.use(bodyParser.json());
const allowedOrigins = ['http://localhost:3000']; // Add more origins as needed


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});