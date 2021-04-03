import React from 'react';

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="items-center mt-80">
      <p className="text-center">
        <span className="text-gray-400">
          Designed and built with ❤️ by{' '}
          <a className="text-indigo-600" href="https://github.com/denniskigen">
            Dennis Kigen
          </a>
          <span className="ml-4">&copy;2021 - now</span>
        </span>
      </p>
    </footer>
  );
};

export { Footer };
