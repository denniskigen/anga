import React from 'react';
import { Footer } from './footer';

const About: React.FunctionComponent = () => {
  return (
    <>
      <section
        className="max-w-7xl pt-2 mt-12 rounded-2xl bg-contain bg-no-repeat mx-auto lg:w-1/2 sm:w-2/3 xl:w-3/5 2xl:w-2/5 h-80 mb-96 bg-yellow-200 bg-hero-pattern"
        style={{ backgroundPositionY: '100%' }}
      >
        <div className="p-4">
          <h3 className="text-gray-600 text-xl font-medium font-sans">
            About Anga
          </h3>
          <p className="pt-4 text-gray-500">
            Anga is a beautiful weather app that shows the current weather and
            next day forecast for a given location.
          </p>
        </div>
        <div className="px-4">
          <span className="mb-4 text-gray-500">
            Anga is built using the following tools:
          </span>
          <ul className="list-disc text-gray-500 m-4">
            <li className="underline text-indigo-500 hover:text-indigo-700">
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
            </li>
            <li className="underline text-indigo-500 hover:text-indigo-700">
              <a
                href="https://weatherstack.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Weatherstack API
              </a>
            </li>
            <li className="underline text-indigo-500 hover:text-indigo-700">
              <a
                href="https://heroicons.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heroicons
              </a>
            </li>
            <li className="underline text-indigo-500 hover:text-indigo-700">
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TailwindCSS
              </a>
            </li>
            <li className="underline text-indigo-500 hover:text-indigo-700">
              <a
                href="https://bas.dev/projects/weather-icons"
                target="_blank"
                rel="noopener noreferrer"
              >
                Weather icons by Basmilius
              </a>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export { About };

// mt-8 mx-auto py-6 sm:px-6 lg:px-8 p-7 h-64
