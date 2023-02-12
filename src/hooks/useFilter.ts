import { useState, useMemo } from 'react';
import { type FilterableItem, filterItemFunction } from '../helpers/itemFilter';

function useFilter<T extends FilterableItem>(
    items: T[],
	initialQuery: string = '',
): {
    query: string,
    filterText: (query: string) => void,
    filteredItems: T[],
} {
	const [query, setQuery] = useState(initialQuery);

	const filteredItems: T[] = useMemo(() => {
        if (query === '') return items;
        return items.filter(filterItemFunction<T>(query));
    }, [query, items]);

    const filterText = (query: string): void => {
        setQuery(query);
    };

    return { query, filterText, filteredItems };
};

export default useFilter;
