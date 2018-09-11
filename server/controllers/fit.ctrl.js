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
    if (req.query.osid) {
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
