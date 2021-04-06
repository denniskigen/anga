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
            Anga is a beautiful weather app that shows instant, accurate weather
            information for any location in the world.
          </p>
          <p className="pt-4 text-gray-500">
            Anga is built on top of the{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              href="https://weatherstack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weatherstack API
            </a>
            . As it uses the free tier plan, it&apos;s limited in various ways.
            Most notably, it does not make API calls securely via HTTPS as that
            feature is only available to the paid plans. This is why when you
            load the app you might only see the loading screen. To get around
            this, you&apos;d need to grant the website insecure access in your
            browser. To do so, click the ℹ️ to the right of the URL in your
            address bar and go to site settings. Scroll down to &apos;Insecure
            content&apos; and select &apos;Allow&apos;. If you like the app, do
            consider starring it on{' '}
            <a
              className="underline text-indigo-500 hover:text-indigo-700"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/denniskigen/anga"
            >
              GitHub
            </a>
            . Thanks for swinging by!
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
      <div className="flex justify-center">
        <a
          href="https://www.buymeacoffee.com/denniskigen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            className="h-16 w-56"
          />
        </a>
      </div>
      <Footer />
    </>
  );
};

export { About };
