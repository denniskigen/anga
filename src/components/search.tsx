import React from 'react';

interface SearchProps {
  error: Error;
  handleSearchTermChange(evt: React.ChangeEvent<HTMLInputElement>): void;
  isSearching: boolean;
}

const Search: React.FunctionComponent<SearchProps> = ({
  error,
  handleSearchTermChange,
  isSearching,
}) => {
  return (
    <div>
      {error ? (
        <div className="mt-2 mb-1 p-4 m-4 py-2 flex flex-wrap bg-red-200 rounded-2xl items-center justify-center px-4">
          <span>{error.message}</span>
        </div>
      ) : null}
      <div className="border-b border-gray-200 mb-2 py-4 flex items-center justify-start px-4 w-100">
        <svg
          width="24"
          height="24"
          fill="none"
          className="mr-4 group-hover:text-gray-500 text-indigo-600 transition-colors duration-200"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <input
          type="search"
          role="search"
          placeholder="Search for a location by name, coordinates or IP address"
          onChange={handleSearchTermChange}
          className="w-3/4 mr-8 outline-none truncate"
        />
        {isSearching ? (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <title>Search for a location</title>
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : null}
      </div>
    </div>
  );
};

export { Search };
