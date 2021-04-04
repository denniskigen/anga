import React from 'react';
import { Footer } from './footer';

const About: React.FunctionComponent = () => {
  return (
    <>
      <section
        className="max-w-7xl pt-2 mt-12 rounded-2xl bg-contain bg-no-repeat mx-auto lg:w-1/2 sm:w-2/3 xl:w-3/5 2xl:w-2/5 h-auto mb-96 bg-yellow-200 bg-hero-pattern"
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
          <p className="pt-4 text-gray-500">
            Anga is built on top of the free tier version of the{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://weatherstack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weatherstack API
            </a>
            . This brings with it several limitations, most notably the
            inability to securely access the API via HTTPS. This is why you're
            only shown the loading screen in the live website. I don't know of
            any workarounds to this that don't involve insecure access or
            ponying up the yearly subscription to a higher pricing tier.
            Regardless, if you're really eager to try the app, click on the ℹ️
            to the left of the URL in your browser's address bar and go to Site
            Settings and enable insecure access. This is obviously sub-optimal,
            but I can't think of any other way just now.
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
