var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET tables page. */
router.get('/tables', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/tables.html"));
});

/* GET reservation page. */
router.get('/reservation', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/reservation.html"));
});


module.exports = router;
