var express = require('express');
var router = express.Router();

/* GET /api listing. */

router.get('/tables', function(req, res, next) {
  res.send('respond with table data');
});

router.post('/reservation', function(req, res, next) {
  res.send('post reservation data');
});

module.exports = router;
