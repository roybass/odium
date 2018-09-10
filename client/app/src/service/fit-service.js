const baseUrl = '/fit';

class FitService {

  getFits(params) {
    console.log('Params ', params);
    let query = '';
    if (params.q) {
      query += `q=${encodeURIComponent(params.q)}&`;
    }
    if (params.ship) {
      query += `ship=${encodeURIComponent(params.ship)}&`;
    }
    if (params.osid) {
      query += `osid=${params.osid}&limit=1`;
    }
    let url = baseUrl;
    if (query) {
      url += '?' + query;
    }
    return fetch(url);
  }
}

export default new FitService();
