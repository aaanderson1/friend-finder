const htmlRoutes = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('./app/routing/apiRoutes.js');

const express = require('express');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 8080

const app = express();

app.use(express.urlencoded({extended: true}));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

htmlRoutes.homeRoute(app);
htmlRoutes.surveyRoute(app);
apiRoutes.addFriendRoute(app);
apiRoutes.getFriendsRoute(app);
app.listen(PORT);