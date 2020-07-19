export const RESPONSE = {
  249758: {
    Version: 1,
    Key: '249758',
    Type: 'City',
    Rank: 30,
    LocalizedName: 'Amsterdam',
    EnglishName: 'Amsterdam',
    PrimaryPostalCode: '',
    Region: {
      ID: 'EUR',
      LocalizedName: 'Europe',
      EnglishName: 'Europe',
    },
    Country: {
      ID: 'NL',
      LocalizedName: 'Netherlands',
      EnglishName: 'Netherlands',
    },
    AdministrativeArea: {
      ID: 'NH',
      LocalizedName: 'North Holland',
      EnglishName: 'North Holland',
      Level: 1,
      LocalizedType: 'Province',
      EnglishType: 'Province',
      CountryID: 'NL',
    },
    TimeZone: {
      Code: 'CEST',
      Name: 'Europe/Amsterdam',
      GmtOffset: 2,
      IsDaylightSaving: true,
      NextOffsetChange: '2020-10-25T01:00:00Z',
    },
    GeoPosition: {
      Latitude: 52.372,
      Longitude: 4.9,
      Elevation: {
        Metric: {
          Value: -1,
          Unit: 'm',
          UnitType: 5,
        },
        Imperial: {
          Value: -3,
          Unit: 'ft',
          UnitType: 0,
        },
      },
    },
    IsAlias: false,
    SupplementalAdminAreas: [],
    DataSets: [
      'AirQualityCurrentConditions',
      'AirQualityForecasts',
      'Alerts',
      'ForecastConfidence',
      'FutureRadar',
      'MinuteCast',
      'Radar',
    ],
  },
  308526: {
    Version: 1,
    Key: '308526',
    Type: 'City',
    Rank: 10,
    LocalizedName: 'Madrid',
    EnglishName: 'Madrid',
    PrimaryPostalCode: '',
    Region: {
      ID: 'EUR',
      LocalizedName: 'Europe',
      EnglishName: 'Europe',
    },
    Country: {
      ID: 'ES',
      LocalizedName: 'Spain',
      EnglishName: 'Spain',
    },
    AdministrativeArea: {
      ID: 'MD',
      LocalizedName: 'Madrid',
      EnglishName: 'Madrid',
      Level: 1,
      LocalizedType: 'Autonomous Community',
      EnglishType: 'Autonomous Community',
      CountryID: 'ES',
    },
    TimeZone: {
      Code: 'CEST',
      Name: 'Europe/Madrid',
      GmtOffset: 2,
      IsDaylightSaving: true,
      NextOffsetChange: '2020-10-25T01:00:00Z',
    },
    GeoPosition: {
      Latitude: 40.41,
      Longitude: -3.686,
      Elevation: {
        Metric: {
          Value: 639,
          Unit: 'm',
          UnitType: 5,
        },
        Imperial: {
          Value: 2095,
          Unit: 'ft',
          UnitType: 0,
        },
      },
    },
    IsAlias: false,
    SupplementalAdminAreas: [
      {
        Level: 3,
        LocalizedName: 'Madrid',
        EnglishName: 'Madrid',
      },
    ],
    DataSets: [
      'AirQualityCurrentConditions',
      'AirQualityForecasts',
      'Alerts',
      'ForecastConfidence',
      'FutureRadar',
      'MinuteCast',
      'Radar',
    ],
  },
  187423: {
    Version: 1,
    Key: '187423',
    Type: 'City',
    Rank: 20,
    LocalizedName: 'Budapest',
    EnglishName: 'Budapest',
    PrimaryPostalCode: '',
    Region: {
      ID: 'EUR',
      LocalizedName: 'Europe',
      EnglishName: 'Europe',
    },
    Country: {
      ID: 'HU',
      LocalizedName: 'Hungary',
      EnglishName: 'Hungary',
    },
    AdministrativeArea: {
      ID: 'BU',
      LocalizedName: 'Budapest',
      EnglishName: 'Budapest',
      Level: 1,
      LocalizedType: 'Capital City',
      EnglishType: 'Capital City',
      CountryID: 'HU',
    },
    TimeZone: {
      Code: 'CEST',
      Name: 'Europe/Budapest',
      GmtOffset: 2,
      IsDaylightSaving: true,
      NextOffsetChange: '2020-10-25T01:00:00Z',
    },
    GeoPosition: {
      Latitude: 47.504,
      Longitude: 19.05,
      Elevation: {
        Metric: {
          Value: 75,
          Unit: 'm',
          UnitType: 5,
        },
        Imperial: {
          Value: 246,
          Unit: 'ft',
          UnitType: 0,
        },
      },
    },
    IsAlias: false,
    SupplementalAdminAreas: [],
    DataSets: [
      'AirQualityCurrentConditions',
      'AirQualityForecasts',
      'Alerts',
      'ForecastConfidence',
      'FutureRadar',
      'MinuteCast',
      'Radar',
    ],
  },
};

type LocationKey = keyof typeof RESPONSE

const fetch = (locationKey: string) => Promise
  .resolve(RESPONSE[Number(locationKey) as LocationKey]);

export default fetch;
