const baseUrl = '/fit';

class FitService {

  getFits(params) {
    console.log('Params ', params);
    let query = '';
    if (params.ship) {
      query += `q=${encodeURIComponent(params.ship)}`;
    }
    let url = baseUrl;
    if (query) {
      url += '?' + query;
    }
    return fetch(url);
  }
}

export default new FitService();
