const mongoose = require('../mongoose');
const Fit = require('../model/fit.model');
const fetch = require('node-fetch');
const esiService = require('../services/esi.service');
const skillReqService = require('../services/skill.req.service');

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
    const me = this;


    Fit.find(query).limit(parseInt(limit)).exec(async (err, fits) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      const promises = fits.map(me.getAppraisal);
      const arr = await Promise.all(promises);

      if (req.user) {
        const skills = await esiService.getSkills(req.user.accessToken);
        arr.forEach(fit => {
          fit.diff = me.getSkillsDiff(skills, fit.fit);
        });
      }
      res.json(arr);
    });
  }

  async getSkills(req, res, next) {
    const skills = await esiService.getSkills(req.user.accessToken);
    res.json(skills);
  }

  getSkillsDiff(userSkills, fit) {
    const items = fit.fit.map(f => f.id);
    return skillReqService.skillDiff(userSkills, items);
  }


  async getAppraisal(fit) {
    const response = await fetch('https://evepraisal.com/appraisal.json?market=jita', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: fit.fit.map(i => i.name).join("\n")
    });
    const json = await response.json();
    return { fit, appr: json.appraisal.totals };
  }

  create(req, res, next) {
  }

}

module.exports = new FitController();
