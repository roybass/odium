const mongoose = require('../mongoose');
const Fit = require('../model/fit.model');

class FitController {


  find(req, res, next) {

    const query = {};

    if (req.query.q) {
      query['$text'] = { '$search' : req.query.q};
    }
    if (req.query.ship) {
      query.ship = req.query.ship;
    }
    const limit = req.query.limit || '10';

    Fit.find(query).limit(parseInt(limit)).exec((err, fit) => {
      res.json(fit || err);
    });
  }

  create(req, res, next) {
  }

}

module.exports = new FitController();
