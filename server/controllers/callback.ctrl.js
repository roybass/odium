const Oauth = require('../services/oauth');

class CallbackController {
  get (req, res) {
    const oauth = new Oauth();

    oauth.getAccessToken(req.query.code)
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.status(500).send(err.message);
        });

  }
}

module.exports = new CallbackController();