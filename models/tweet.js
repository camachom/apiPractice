const db = require('../db/index');

module.exports.Tweets = {
  // get /tweets
  getAll: (req, res, next) => {
    db.query('SELECT * FROM tweets', [], (err, data) => {
      if (err) {
        next(err);
        return;
      }
      res.json(data.rows);
      return;
    })
  },

  // post /tweets
  post: (req, res, next) => {
    db.query(
      'INSERT INTO tweets(message) VALUES($1) RETURNING *',
      [req.body.message],
      (err, data) => {
        if (err) {
          next(err);
          return;
        }
        res.json(data.rows);
        return;
      })
  },

  // put /tweets/:id
  put: (req, res, next) => {
    db.query(
      'UPDATE tweets SET message = $1 WHERE tweets.id = $2 RETURNING *',
      [req.body.message, req.params.id],
      (err, data) => {
        if (err) {
          next(err);
          return;
        }
        res.json(data.rows);
        return;
      })
  },

  // put /tweets/:id
  delete: (req, res, next) => {
    db.query(
      'DELETE FROM tweets WHERE tweets.id = $1 RETURNING *',
      [req.params.id],
      (err, data) => {
        if (err) {
          next(err);
          return;
        }
        res.json(data.rows);
        return;
      })
  },

  // get /tweets/:id
  getById: (req, res, next) => {
    db.query('SELECT * FROM tweets WHERE tweets.id = $1', [req.params.id], (err, data) => {
      if (err) {
        next(err);
        return;
      }
      res.json(data.rows);
      return;
    })
  }
}

