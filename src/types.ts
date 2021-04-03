type LocationData = {
  name: string;
  country: string;
  region: string;
  lat: string;
  lon: string;
  timezone_id: string;
  localtime: string;
  localtime_epoch: number;
  utc_offset: string;
};

type WeatherData = {
  current?: CurrentWeatherData;
  forecast?: ForecastData;
  location?: LocationData;
};

type ForecastData = {
  [key: string]: WeatherForecast;
};

type WeatherForecast = {
  date: string;
  date_epoch: number;
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: number;
  };
  mintemp: number;
  maxtemp: number;
  avgtemp: number;
  totalsnow: number;
  sunhour: number;
  uv_index: number;
};

type CurrentWeatherData = {
  observation_time: string;
  temperature: number;
  weather_code: number;
  weather_icons: Array<string>;
  weather_descriptions: Array<string>;
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
  is_day: string;
};

type JSONResponse = {
  current?: CurrentWeatherData;
  error?: {
    code: number;
    type: string;
    info: string;
  };
  forecast?: ForecastData;
  location?: LocationData;
  success?: boolean;
};

export type {
  CurrentWeatherData,
  ForecastData,
  JSONResponse,
  LocationData,
  WeatherData,
  WeatherForecast,
};
