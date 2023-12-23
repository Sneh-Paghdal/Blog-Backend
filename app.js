const express = require('express');
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyparser = require("body-parser");
require('dotenv').config();
var cors = require("cors");
const cookieParser = require('cookie-parser');

app.use(morgan('dev'));
app.use(bodyparser.json({limit : "5mb"}));
app.use(bodyparser.urlencoded({
    limit : "5mb",
    extended : true
}));
app.use(cookieParser());
app.use(cors());
