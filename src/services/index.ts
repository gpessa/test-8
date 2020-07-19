import axios from 'axios';
import jsonp from 'jsonp';

export const getCityInfo = (locationKey: string): Promise<any> => {
  const url = `http://dataservice.accuweather.com/locations/v1/${locationKey}?apikey=${process.env.VUE_APP_ACCUWEATHER_API_KEY}`;
  return new Promise((resolve, reject) => {
    jsonp(url, { param: 'callback' }, (err, resp) => {
      if (err) reject(err);
      resolve(resp);
    });
  });
};

export const getCityWeather = (locationKey: string): Promise<any> => {
  const url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${process.env.VUE_APP_ACCUWEATHER_API_KEY}`;
  return new Promise((resolve, reject) => {
    jsonp(url, { param: 'callback' }, (err, resp) => {
      if (err) reject(err);
      resolve(resp);
    });
  });
};

export const getCityPhoto = (city: string) => {
  const url = new URL('https://api.flickr.com/services/rest');

  return axios
    .get(url.toString(), {
      params: {
        api_key: process.env.VUE_APP_FLICKR_API_KEY,
        method: 'flickr.photos.search',
        text: `${city} city`,
        sort: 'relevance',
        nojsoncallback: 1,
        extras: 'url_n',
        format: 'json',
        per_page: 1,
        page: 1,
      },
    })
    .then((resp) => resp.data.photos.photo[0])
    .then(({
      id,
      farm,
      secret,
      server,
    }) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`);
};

export const convertToCelsius = (value: number) => ((5 / 9) * (value - 32)).toFixed(0);
