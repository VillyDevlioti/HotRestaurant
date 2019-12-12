var express = require('express');
var router = express.Router();
var app = express();

/* GET /api/tables listing. */

router.get('/tables', function(req, res, next) {
  res.send('respond with table data');
});

/* POST /api/reservation data. */

router.post('/reservation', function(req, res, next) {
  res.send('post reservation data');
});

app.post("/reservation", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  console.log(newReservation);

  res.json(newReservation);
});


module.exports = router;
