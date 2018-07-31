const mongoose = require('../mongoose');
const Fit = require('../model/fit.model');

class FitController {


  find(req, res, next) {

    const search = req.query.q || '';
    const limit = req.query.limit || '10';

    Fit.find({'$text' : {'$search' : search}}).limit(parseInt(limit)).exec((err, fit) => {
      res.json(fit || err);
    });
  }

  create(req, res, next) {
  }

}

module.exports = new FitController();