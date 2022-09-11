var express = require('express');
var router = express.Router();
const moment = require('moment');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: moment(new Date()).subtract(5, 'h'),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: moment(new Date()).subtract(17, 'm'),
  },
];

/* GET home page. */
router
  .get('/', function (req, res, next) {
    const formatDates = messages
      .map((message) => ({
        ...message,
        added: moment(message.added).fromNow(),
      }))
      .reverse();

    res.render('index', { title: 'Mini Messageboard', messages: formatDates });
  })
  .get('/new', (req, res, next) => {
    res.render('form', { title: 'New Message' });
  })
  .post('/new', (req, res, next) => {
    const { user, text } = req.body;
    const added = new Date();
    messages.push({ text, user, added });
    res.redirect('/');
  });

module.exports = router;
