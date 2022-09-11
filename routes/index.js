var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router
  .get('/', function (req, res, next) {
    res.render('index', { title: 'Mini Messageboard', messages });
  })
  .get('/new', (req, res, next) => {
    res.render('form', { title: 'New Message' });
  })
  .post('/new', (req, res, next) => {
    console.log('this fired');
    res.redirect('/');
  });

module.exports = router;
