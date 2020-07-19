export const RESPONSE = {
  249758: {
    Headline: {
      EffectiveDate: '2020-07-14T08:00:00+02:00',
      EffectiveEpochDate: 1594706400,
      Severity: 4,
      Text: 'Rain Tuesday',
      Category: 'rain',
      EndDate: '2020-07-14T20:00:00+02:00',
      EndEpochDate: 1594749600,
      MobileLink: 'http://m.accuweather.com/en/nl/amsterdam/249758/extended-weather-forecast/249758?lang=en-us',
      Link: 'http://www.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?lang=en-us',
    },
    DailyForecasts: [
      {
        Date: '2020-07-14T07:00:00+02:00',
        EpochDate: 1594702800,
        Temperature: {
          Minimum: {
            Value: 52,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 64,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 18,
          IconPhrase: 'Rain',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
        },
        Night: {
          Icon: 12,
          IconPhrase: 'Showers',
          HasPrecipitation: true,
          PrecipitationType: 'Rain',
          PrecipitationIntensity: 'Light',
        },
        Sources: [
          'AccuWeather',
        ],
        MobileLink: 'http://m.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?day=1&lang=en-us',
        Link: 'http://www.accuweather.com/en/nl/amsterdam/249758/daily-weather-forecast/249758?day=1&lang=en-us',
      },
    ],
  },
  308526: {
    Headline: {
      EffectiveDate: '2020-07-16T08:00:00+02:00',
      EffectiveEpochDate: 1594879200,
      Severity: 5,
      Text: 'Possible danger of dehydration and heat stroke while doing strenuous activities Thursday',
      Category: 'heat',
      EndDate: '2020-07-16T20:00:00+02:00',
      EndEpochDate: 1594922400,
      MobileLink: 'http://m.accuweather.com/en/es/madrid/308526/extended-weather-forecast/308526?lang=en-us',
      Link: 'http://www.accuweather.com/en/es/madrid/308526/daily-weather-forecast/308526?lang=en-us',
    },
    DailyForecasts: [
      {
        Date: '2020-07-14T07:00:00+02:00',
        EpochDate: 1594702800,
        Temperature: {
          Minimum: {
            Value: 64,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 92,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 4,
          IconPhrase: 'Intermittent clouds',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 34,
          IconPhrase: 'Mostly clear',
          HasPrecipitation: false,
        },
        Sources: [
          'AccuWeather',
        ],
        MobileLink: 'http://m.accuweather.com/en/es/madrid/308526/daily-weather-forecast/308526?day=1&lang=en-us',
        Link: 'http://www.accuweather.com/en/es/madrid/308526/daily-weather-forecast/308526?day=1&lang=en-us',
      },
    ],
  },
  187423: {
    Headline: {
      EffectiveDate: '2020-07-19T08:00:00+02:00',
      EffectiveEpochDate: 1595138400,
      Severity: 4,
      Text: 'Pleasant Sunday',
      Category: 'mild',
      EndDate: null,
      EndEpochDate: null,
      MobileLink: 'http://m.accuweather.com/en/hu/budapest/187423/extended-weather-forecast/187423?lang=en-us',
      Link: 'http://www.accuweather.com/en/hu/budapest/187423/daily-weather-forecast/187423?lang=en-us',
    },
    DailyForecasts: [
      {
        Date: '2020-07-14T07:00:00+02:00',
        EpochDate: 1594702800,
        Temperature: {
          Minimum: {
            Value: 53,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 76,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Day: {
          Icon: 3,
          IconPhrase: 'Partly sunny',
          HasPrecipitation: false,
        },
        Night: {
          Icon: 35,
          IconPhrase: 'Partly cloudy',
          HasPrecipitation: false,
        },
        Sources: [
          'AccuWeather',
        ],
        MobileLink: 'http://m.accuweather.com/en/hu/budapest/187423/daily-weather-forecast/187423?day=1&lang=en-us',
        Link: 'http://www.accuweather.com/en/hu/budapest/187423/daily-weather-forecast/187423?day=1&lang=en-us',
      },
    ],
  },
};

type LocationKey = keyof typeof RESPONSE

const fetch = (locationKey: string) => Promise
  .resolve(RESPONSE[Number(locationKey) as LocationKey]);

export default fetch;
