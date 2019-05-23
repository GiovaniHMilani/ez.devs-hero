const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();
const router = express.Router();
const cors = require('cors');

mongoose.connect('mongodb+srv://ezdevsatlas:milani1234@cluster0-vf8ep.mongodb.net/hero')

const Hero = require('./models/hero')

const indexRoute = require('./routes/index-route');
const heroRoute = require('./routes/hero-route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/heros', heroRoute);

module.exports = app;