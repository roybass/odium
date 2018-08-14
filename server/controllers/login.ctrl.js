const url = require('url');

class LoginController {
  get (req, res) {
    const endpoint = url.format({
      protocol: 'https',
      hostname: 'login.eveonline.com',
      pathname: 'oauth/authorize',
      query: {
        response_type: 'code',
        redirect_uri: 'http://localhost:3000/auth/callback',
        client_id: '629d64a982c346018b2b0af0010e73e0',
        scope: 'esi-location.read_location.v1'
      }
    });

    res.redirect(endpoint);
  }
}

module.exports = new LoginController();