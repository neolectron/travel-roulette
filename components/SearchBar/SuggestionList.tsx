import classNames from 'classnames';
import type { Zone } from '../../graphql/extended-types';
import { useEffect, useRef } from 'react';

interface SuggestionListProps {
  suggestions: Zone[];
  selectedIndex: number;
  onClick?: (zone: Zone) => void;
}

const SuggestionList = ({
  suggestions,
  selectedIndex,
  onClick,
}: SuggestionListProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!listRef.current || !itemRef.current) return;

    listRef.current.scrollTop =
      (selectedIndex - 1) * itemRef.current.offsetHeight;
  });

  return (
    <ul ref={listRef} className="max-h-32 overflow-auto shadow-md">
      {suggestions.map((suggestion, index) => (
        <li
          ref={itemRef}
          key={suggestion.name + suggestion.code}
          onClick={() => {
            onClick?.(suggestion);
          }}
          className={classNames('p-2 flex justify-between', {
            'bg-primary-light': index === selectedIndex,
          })}
        >
          <span className="font-semibold">{suggestion.name}</span>
          <span className="text-grey italic">{suggestion.kind}</span>
        </li>
      ))}
    </ul>
  );
};

export default SuggestionList;
