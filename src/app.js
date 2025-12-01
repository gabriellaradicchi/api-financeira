require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path'); 
const conn = require('./db/conn'); 
const routes = require('./routes/router'); 

const app = express();

app.use(cors());
app.use(express.json());

conn();

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', routes);

module.exports = app;