const fetch = require('node-fetch');

class EsiService {

  async getSkills(token) {
    const response = await fetch('https://esi.evetech.net/latest/characters/2112034747/skills/?datasource=tranquility', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    return await response.json();
  }

}

module.exports = new EsiService();
