const friends = require('../data/friends.js');


module.exports = {};

module.exports.homeRoute = (app) => {
    app.get('/', (req, res) => {
        res.render('home');
    });
};

module.exports.surveyRoute = (app) => {
    app.get('/survey', (req, res) => {
        res.render('survey', {questions: friends.getQuestions()});
    });
};