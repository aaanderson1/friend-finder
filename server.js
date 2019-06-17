const htmlRoutes = require('./app/routing/htmlRoutes.js');
const express = require('express');
var exphbs = require('express-handlebars');
const PORT = process.env.PORT || 8080

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

htmlRoutes.homeRoute(app);
htmlRoutes.surveyRoute(app);
app.listen(PORT);