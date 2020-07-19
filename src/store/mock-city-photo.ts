export const RESPONSE = {
  249758: 'https://farm1.staticflickr.com/916/42799399164_938f8dc4b6.jpg',
  308526: 'https://farm9.staticflickr.com/8176/29348617166_f2973787ed.jpg',
  187423: 'https://farm6.staticflickr.com/5488/29547535383_5137eaef6c.jpg',
};

type LocationKey = keyof typeof RESPONSE

const fetch = (locationKey: string) => Promise
  .resolve(RESPONSE[Number(locationKey) as LocationKey]);

export default fetch;
