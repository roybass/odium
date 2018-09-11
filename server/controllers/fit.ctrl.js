const mongoose = require('../mongoose');
const Fit = require('../model/fit.model');

class FitController {

  find(req, res, next) {

    const query = {};

    if (req.query.q) { // Free text search
      query['$text'] = { '$search': req.query.q };
    }
    if (req.query.ship) { // Ship selection, usually from UI
      query.ship = req.query.ship;
    }
    if (req.query.osid) { // Specific fit - usually when viewing a single fit.
      query.osid = req.query.osid;
    }
    const limit = req.query.limit || '10';

    console.log('Query = ', query);
    Fit.find(query).limit(parseInt(limit)).exec((err, fit) => {
      // console.log('response = ', fit, err);
      res.json(fit || err);
    });
  }

  create(req, res, next) {
  }

}

module.exports = new FitController();
