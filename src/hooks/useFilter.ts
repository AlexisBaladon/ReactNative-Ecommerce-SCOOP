import { useState, useMemo, useDeferredValue } from 'react';
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
    const deferredQuery = useDeferredValue(query);

	const filteredItems: T[] = useMemo(() => {
        if (deferredQuery === '') return items;
        return items.filter(filterItemFunction<T>(deferredQuery));
    }, [deferredQuery, items]);

    const filterText = (query: string): void => {
        setQuery(query);
    };

    return { query, filterText, filteredItems };
};

export default useFilter;
