const url = require('url');
const request = require('request');

class Oauth {
  getAccessToken (code) {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        protocol: 'https',
        hostname: 'login.eveonline.com',
        pathname: 'oauth/token'
      });

      const options = {
        url: endpoint,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Host': 'login.eveonline.com',
          'Authorization': 'Basic NjI5ZDY0YTk4MmMzNDYwMThiMmIwYWYwMDEwZTczZTA6ZzhhRlBkR2tzdE1WampYVjBLbjJrR1htbVlRaG9KSkwweUVEYjlncA=='
        },
        form: {
          "grant_type": "authorization_code",
          "code": code
        }
      };

      request.post(options, (err, httpResponse, body) => {
        return (!err) ? resolve(JSON.parse(body)) : reject(err);
      });
    });
  }

  getRefreshToken (last_token) {
    return new Promise((resolve, reject) => {
      const endpoint = url.format({
        protocol: 'https',
        hostname: 'login.eveonline.com',
        pathname: 'oauth/token'
      });

      const options = {
        url: endpoint,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Host': 'login.eveonline.com',
          'Authorization': 'Basic NjI5ZDY0YTk4MmMzNDYwMThiMmIwYWYwMDEwZTczZTA6ZzhhRlBkR2tzdE1WampYVjBLbjJrR1htbVlRaG9KSkwweUVEYjlncA=='
        },
        form: {
          "grant_type": "refresh_token",
          "refresh_token": last_token
        }
      };

      request.post(options, (err, httpResponse, body) => {
        return (!err) ? resolve(JSON.parse(body)) : reject(err);
      });
    });
  }
}

module.exports = Oauth;