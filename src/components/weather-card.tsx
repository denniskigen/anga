import React from 'react';
import dayjs from 'dayjs';
import type { CurrentWeatherData, LocationData } from '../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const weatherIcons = require('./icons');
const iconURL = `https://raw.githubusercontent.com/basmilius/weather-icons/master/production/line/all/`;

interface WeatherCardProps {
  location: LocationData;
  weather: CurrentWeatherData;
}

const WeatherCard: React.FunctionComponent<WeatherCardProps> = ({
  location,
  weather,
}) => {
  return (
    <div className="overflow-hidden p-2 border-b border-gray-200">
      <div className="py-1 flex items-center justify-start px-4 mb-4">
        <div className="flex items-baseline w-full justify-between">
          <h1 className="text-3xl mr-4 text-gray-900 font-bold">
            {location.name}{' '}
          </h1>
          <span className="text-m text-gray-400">
            {location.region ? `${location.region}, ` : ''}
            {location.country}
          </span>
          <span className="text-m text-gray-600">
            {dayjs(location.localtime).format('ddd')},{' '}
            {dayjs(location.localtime).format('h:mm A')}
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex-col py-2 px-4">
          <p className="text-3xl text-indigo-600 mt-4 mb-4 tracking-wide">
            {weather.weather_descriptions.join(',')}
          </p>
          <p className="text-gray-600 text-5xl mt-4 mb-4">
            {weather.temperature}&deg;C
          </p>
          <p className="text-gray-500 text-m mt-4 mb-10">
            Feels like {weather.feelslike}&deg;C
          </p>
          <p className="text-gray-400 text-m mt-4 mb-4 flex flex-col">
            <span className="m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="inline-flex mr-2 fill-current text-indigo-600"
              >
                <path d="M11 10H0V8h11a1 1 0 000-2 .997.997 0 00-.905.587l-1.749-.956A2.987 2.987 0 0111 4c3.971 0 3.969 6 0 6zm7 7c0-1.656-1.344-3-3-3H0v2h15a1 1 0 010 2 .997.997 0 01-.905-.587l-1.749.956A2.987 2.987 0 0015 20c1.656 0 3-1.344 3-3zm1.014-7.655A1.501 1.501 0 0120.5 8c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H0v2h20.5c1.932 0 3.5-1.568 3.5-3.5S22.432 6 20.5 6c-1.624 0-2.977 1.116-3.372 2.617l1.886.728z" />
              </svg>
              {weather.wind_speed} km/h {weather.wind_dir}
            </span>
            <span className="m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="inline-flex mr-2 fill-current text-indigo-600"
              >
                <path d="M20.422 7.516c-.178-3.233-3.031-5.778-6.432-5.492A5.953 5.953 0 009.5 0C6.328 0 3.746 2.443 3.578 5.516 1.545 5.875 0 7.621 0 9.722 0 12.084 1.949 14 4.354 14H5.68a4.36 4.36 0 003.674 2h10.291C22.051 16 24 14.084 24 11.722c0-2.101-1.545-3.847-3.578-4.206zM5.027 12h-.673C3.057 12 2 10.978 2 9.722 2 7.604 4.104 7.125 5.488 7.21 5.438 5.854 5.625 2 9.5 2c.967 0 1.714.25 2.29.644-1.823.922-3.096 2.746-3.212 4.872C6.556 7.874 4.881 9.643 5.027 12zm14.618 2H9.354C8.057 14 7 12.978 7 11.722c0-2.118 2.104-2.597 3.488-2.512C10.438 7.854 10.625 4 14.5 4c3.771 0 4.229 3.771 4.012 5.209C20.021 9.104 22 9.646 22 11.722 22 12.978 20.943 14 19.645 14zM6.869 20.713l-1.41-1.41L7.762 17l1.41 1.41-2.303 2.303zM3.569 24l-1.41-1.397L4.462 20.3l1.41 1.41L3.569 24zm8.253-3.287l-1.41-1.41L12.715 17l1.41 1.41-2.303 2.303zM8.522 24l-1.41-1.397L9.415 20.3l1.41 1.41L8.522 24zm8.175-3.287l-1.41-1.41L17.59 17 19 18.41l-2.303 2.303zM13.396 24l-1.41-1.397 2.303-2.303 1.41 1.41L13.396 24z" />
              </svg>
              {weather.precip} mm
            </span>
            <span className="m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="inline-flex mr-2 fill-current text-indigo-600"
              >
                <path d="M11.234 14.141c0 .714-.138 1.249-.414 1.608-.276.358-.681.538-1.215.538-.512 0-.907-.184-1.187-.552C8.14 15.368 8 14.836 8 14.141c0-1.418.535-2.127 1.606-2.127.524 0 .927.184 1.208.552.28.368.42.893.42 1.575zm-2.061.01c0 .394.035.688.105.882.07.194.182.291.337.291.298 0 .447-.391.447-1.173 0-.776-.149-1.163-.447-1.163-.155 0-.268.095-.337.286-.07.19-.105.483-.105.877zm5.263-2.039l-3.774 6.804H9.545l3.774-6.804h1.117zM16 16.859c0 .711-.138 1.245-.414 1.603-.276.359-.681.538-1.215.538-.512 0-.908-.184-1.187-.552-.279-.368-.419-.897-.419-1.589 0-1.418.535-2.127 1.606-2.127.524 0 .927.184 1.208.552.281.367.421.893.421 1.575zm-2.062.009c0 .394.035.688.105.882.07.194.182.291.337.291.298 0 .447-.391.447-1.173 0-.776-.149-1.163-.447-1.163-.155 0-.268.095-.337.286-.07.191-.105.484-.105.877zM12 5.56c2.725 5.186 6 6.718 6 10.515C18 19.342 15.309 22 12 22s-6-2.658-6-5.925c0-3.797 3.274-5.327 6-10.515zM12 0C9.667 8.958 4 10.188 4 16.075 4 20.453 7.579 24 12 24c4.421 0 8-3.547 8-7.925C20 10.188 14.333 8.958 12 0z" />
              </svg>
              {weather.humidity} %
            </span>
          </p>
        </div>
        <div className="flex-row">
          <img
            width="300px"
            height="250px"
            alt={
              weatherIcons[weather.is_day.match(/yes/i) ? 'day' : 'night'][
                weather.weather_code.toString()
              ].icon
            }
            src={
              iconURL +
              weatherIcons[weather.is_day.match(/yes/i) ? 'day' : 'night'][
                weather.weather_code.toString()
              ].icon +
              '.svg'
            }
          />
        </div>
      </div>
    </div>
  );
};

export { WeatherCard };
