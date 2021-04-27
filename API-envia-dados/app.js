process.env.NODE_ENV = 'production'; // ALTERE AQUI seu ambiente para 'dev' ou 'production'

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apiSensores = require('./routes/api-sensores');

var app = express();

app.use(logger('production')); // coloque aqui também, o mesmo valor da linha 1
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiSensores);

module.exports = app;
