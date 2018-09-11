const mongoose = require('../mongoose');
const Fit = require('../model/fit.model');
const fetch = require('node-fetch');

class FitController {

  constructor() {
    this.find = this.find.bind(this);
    this.getAppraisal = this.getAppraisal.bind(this);
  }

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
    const me = this;


    Fit.find(query).limit(parseInt(limit)).exec((err, fits) => {
      // console.log('response = ', fit, err);
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      const promises = fits.map(me.getAppraisal);
      Promise.all(promises).then(arr => {
        res.json(arr);
      });
    });
  }

  async getAppraisal(fit) {
    const response = await fetch('https://evepraisal.com/appraisal.json?market=jita', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: this.getFitAsText(fit)
    });
    const json = await response.json();
    return { fit, appr: json.appraisal.totals };
  }

  getFitAsText(fit) {
    return fit.fit.map(i => i.name).join("\n");
  }

  create(req, res, next) {
  }

}

module.exports = new FitController();
