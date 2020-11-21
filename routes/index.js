const express = require('express');
const router = express.Router();
const { Tweets } = require('../models/tweet');

/* GET home page. */
router.get('/tweets', function (req, res, next) {
  Tweets.getAll(req, res, next);
});

router.post('/tweets', function (req, res, next) {
  Tweets.post(req, res, next);
});

router.get('/tweets/:id', function (req, res, next) {
  Tweets.getById(req, res, next);
});

router.put('/tweets/:id', function (req, res, next) {
  Tweets.put(req, res, next);
});

router.delete('/tweets/:id', function (req, res, next) {
  Tweets.delete(req, res, next);
});

module.exports = router;
