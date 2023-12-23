const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyparser = require("body-parser");
require('dotenv').config();
var cors = require("cors");
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes.js');
const postRoute = require('./routes/postRoute.js');

app.use(morgan('dev'));
app.use(bodyparser.json({limit : "5mb"}));
app.use(bodyparser.urlencoded({
    limit : "5mb",
    extended : true
}));
app.use(cookieParser());
app.use(cors());

//ROUTES MIDDLEWARE
app.use('/api', authRoutes);
app.use('/api', postRoute);

module.exports = app;
