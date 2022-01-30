import React from 'react';
import { debounce } from 'lodash';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { About } from './about';
import { Footer } from './footer';
import { Forecast } from './forecast';
import { Loading } from './loading';
import { Navbar } from './navbar';
import { Search } from './search';
import { WeatherCard } from './weather-card';
import type {
  CurrentWeatherData,
  JSONResponse,
  LocationData,
  WeatherData,
  WeatherForecast,
} from '../types';
import './app.css';

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const searchTimeout = 1000;
  const [city, setCity] = React.useState('Nizhny');
  const [error, setError] = React.useState<Error | null>(null);
  const [forecast, setForecast] = React.useState<Array<WeatherForecast>>(null);
  const [location, setLocation] = React.useState<LocationData>(null);
  const [weather, setWeather] = React.useState<CurrentWeatherData>(null);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState('');
  const [isSearching, setIsSearching] = React.useState(false);

  const debounceSearch = React.useMemo(
    () =>
      debounce((searchTerm) => {
        setDebouncedSearchTerm(searchTerm);
      }, searchTimeout),
    []
  );

  const handleSearchTermChange = (event: any) => {
    if (event.target.value) {
      setIsSearching(true);
    }
    debounceSearch(event.target.value);
  };

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setCity(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, isSearching, setCity]);

  React.useEffect(() => {
    fetchWeather(city)
      .then((weatherData) => {
        const { current, forecast, location } = weatherData;
        if (error) {
          setError(null);
        }
        setIsSearching(false);
        setLocation(location);
        setForecast(Object.values(forecast));
        setWeather(current);
      })
      .catch((err) => {
        setIsSearching(false);
        setError(err);
      });
  }, [city]);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {weather && Object.keys(weather).length ? (
              <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 md:w-2/3 lg:w-2/3 xl:w-3/5 2xl:w-2/5">
                  <Search
                    error={error}
                    handleSearchTermChange={handleSearchTermChange}
                    isSearching={isSearching}
                  />
                  <WeatherCard location={location} weather={weather} />
                  <Forecast forecast={forecast} />
                </div>
                <Footer />
              </main>
            ) : (
              <Loading />
            )}
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

async function fetchWeather(city: string): Promise<WeatherData> {
  const response = await window.fetch(
    `${apiUrl}/forecast?access_key=${apiKey}&query=${city}`
  );
  const { current, forecast, location, error, success }: JSONResponse =
    await response.json();
  if (response.ok) {
    if (current && forecast && location) {
      return { current, forecast, location };
    } else if (!success && error) {
      return Promise.reject(new Error(`Error getting weather for "${city}"`));
    }
  }
}

export default App;
