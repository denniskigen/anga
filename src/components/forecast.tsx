import React from 'react';
import dayjs from 'dayjs';
import { WeatherForecast } from '../types';
interface ForecastProps {
  forecast: Array<WeatherForecast>;
}

const Forecast: React.FunctionComponent<ForecastProps> = ({ forecast }) => {
  return (
    <div className="flex p-4 py-4 px-4 ml-4 mr-4 text-lg text-gray-700 justify-between">
      <span>{dayjs(forecast[0].date).add(2, 'day').format('dddd')}</span>
      <span>
        <span className="text-indigo-500">{forecast[0].maxtemp}&deg;</span>{' '}
        <span className="text-gray-500">/</span>{' '}
        <span className="text-gray-500">{forecast[0].mintemp}&deg;</span>
      </span>
    </div>
  );
};

export { Forecast };
