const weather = {
  request: {
    type: 'City',
    query: 'Nizhny Novgorod, Russia',
    language: 'en',
    unit: 'm',
  },
  location: {
    name: 'Nizhny Novgorod',
    country: 'Russia',
    region: 'Novgorod',
    lat: '56.330',
    lon: '44.000',
    timezone_id: 'Europe/Moscow',
    localtime: '2021-04-04 21:16',
    localtime_epoch: 1617570960,
    utc_offset: '3.0',
  },
  current: {
    observation_time: '06:16 PM',
    temperature: 2,
    weather_code: 116,
    weather_icons: [
      'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png',
    ],
    weather_descriptions: ['Partly cloudy'],
    wind_speed: 7,
    wind_degree: 260,
    wind_dir: 'W',
    pressure: 1007,
    precip: 0.1,
    humidity: 69,
    cloudcover: 50,
    feelslike: -1,
    uv_index: 1,
    visibility: 10,
    is_day: 'no',
  },
  forecast: {
    '2021-04-03': {
      date: '2021-04-03',
      date_epoch: 1617408000,
      astro: {
        sunrise: '05:29 AM',
        sunset: '06:47 PM',
        moonrise: '01:47 AM',
        moonset: '08:11 AM',
        moon_phase: 'Waning Crescent',
        moon_illumination: 48,
      },
      mintemp: -3,
      maxtemp: 1,
      avgtemp: 0,
      totalsnow: 2.6,
      sunhour: 8.2,
      uv_index: 1,
    },
  },
};

const apiError = {
  success: false,
  error: {
    code: 615,
    type: 'request_failed',
    info: 'Your API request failed. Please try again or contact support.',
  },
};

export { apiError, weather };
