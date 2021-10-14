import type { Zone } from '../../graphql/extended-types';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  PropsWithChildren,
} from 'react';

type SearchBarContextProviderType = {
  onArrowUp: () => void;
  onArrowDown: () => void;
  onEnter: () => void;
  onEscape: () => void;
  onClick: () => void;
  setSearchText: () => void;
  setSuggested: () => void;
  setSelectedIndex: () => void;
  setIsOpen: () => void;
  searchText: string;
  suggested: Zone[];
  selectedIndex: number;
  isOpen: () => void;
};

type SearchContextProviderProps = PropsWithChildren<{
  suggestions?: Zone[];
  onSelection?: (zone: Zone) => void;
}>;

export const SearchBarContext = createContext<SearchBarContextProviderType>({});
export const useSearchBarContext = () => useContext(SearchBarContext);

export const SearchBarContextProvider = ({
  children,
  onSelection,
  suggestions,
}: SearchContextProviderProps) => {
  const [searchText, setSearchText] = useState('');
  const [suggested, setSuggested] = useState<Zone[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // events
  const onEscape = () => setIsOpen(false);
  const onArrowUp = () => setSelectedIndex(selectedIndex - 1);
  const onArrowDown = () => setSelectedIndex(selectedIndex + 1);

  const onEnter = () => {
    const currentSuggestion = suggested[selectedIndex];
    if (!currentSuggestion) return;
    setSearchText(currentSuggestion.name);
    setSelectedIndex(0);
    setIsOpen(false);
    onSelection?.(currentSuggestion);
  };

  function onClick(selectedZone: Zone) {
    setSearchText(selectedZone.name);
    setIsOpen(false);
    setSelectedIndex(0);
    onSelection?.(selectedZone);
  }

  const value = {
    onArrowUp,
    onArrowDown,
    onEnter,
    onEscape,
    onClick,
    setSearchText,
    setSuggested,
    setSelectedIndex,
    setIsOpen,
    searchText,
    suggested,
    selectedIndex,
    isOpen,
  };

  return (
    <SearchBarContext.Provider value={value}>
      {children}
    </SearchBarContext.Provider>
  );
};

export default SearchBarContextProvider;
