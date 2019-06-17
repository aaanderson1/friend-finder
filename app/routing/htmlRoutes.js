var exports = module.exports = {};

exports.homeRoute = (app) => {
    app.get('/', (req, res) => {
        res.render('home');
    });
};

exports.surveyRoute = (app) => {
    app.get('/survey', (req, res) => {
        res.render('survey', {questions: [
            {question: 'Do you like animals?'}, 
            {question: 'Do you like animals?'}
        ]});
    });
};