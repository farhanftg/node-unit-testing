var express = require('express');
var mysql = require('mysql');
var app = express();
var route = require('./route');
var bodyParser      = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

global.express = express;
global.mysql = mysql;

require('./db');
app.use('/api',route);

module.exports = app;

