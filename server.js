const express = require('express');
var exphbs = require('express-handlebars');
const PORT = process.env.PORT || 8080

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT);