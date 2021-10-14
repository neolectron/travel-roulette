import type { Zone } from '../../graphql/extended-types';
import React, { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import SuggestionList from './SuggestionList';
import { useSearchBarContext } from './SearchBarContext';

interface SearchBarProps {
  suggestions?: Zone[];
  onSelection?: (zone: Zone) => void;
}

const filterSuggestions = (list: Zone[], searchPattern: string) =>
  list.filter(
    ({ name }) => name.toLowerCase().indexOf(searchPattern.toLowerCase()) > -1
  );

const SearchBar = ({ suggestions, onSelection }: SearchBarProps) => {
  const searchRef = useRef<HTMLDivElement>(null);
  const { setIsOpen } = useSearchBarContext();

  useClickAway(searchRef, () => setIsOpen(false));

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;
  //   setSearchText(value);

  //   if (!suggestions) return;

  //   const filtered = filterSuggestions(suggestions, value);

  //   setSuggested(filtered);
  //   setSelectedIndex(0);

  //   if (!filtered.length || value === '') {
  //     setIsOpen(false);
  //   } else {
  //     setIsOpen(true);
  //   }
  // };

  return (
    <div ref={searchRef}>
      <div className="relative">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="left-3 top-1/2 absolute text-gray-400 transform -translate-y-1/2"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          className="focus:border-primary focus:outline-none w-full py-2 pl-10 pr-4 text-black border rounded-md"
          type="search"
          aria-label="Search countries and continents."
          placeholder="Search Countries and Continents"
          value={searchText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></input>
      </div>
      {isOpen && (
        <SuggestionList
          suggestions={suggested}
          selectedIndex={selectedIndex}
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default SearchBar;
