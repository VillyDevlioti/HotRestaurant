var express = require('express');
var router = express.Router();
var app = express();
var data = require('../data');
var tables = data.tables;
var waitlist = data.waitlist;
var reservations = data.reservations;


/* GET /api/tables listing. */

router.get('/tables', function (req, res, next) {
  res.send('respond with table data');
});

/* POST /api/reservation data. */

router.post('/reservation', function (req, res, next) {
  res.send('post reservation data');
});

app.post("/reservation", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;
  console.log(newReservation);
  reservations.push(newReservation);
  res.json(newReservation);

  //adding logic to handle reservations
  for (var i = 0; i < reservations.length; i++) {
    if (i < 5) {
      tables.push(reservations[i]);

    }
    else {
      waitlist.push(reservations[i]);
    }

  }

});


module.exports = router;
