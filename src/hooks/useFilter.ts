import { useState, useMemo, useDeferredValue } from 'react';
import { type FilterableItem, filterItemFunction, categoryFilterCondition } from '../helpers/itemFilter';

function useFilter<T extends FilterableItem>(
	items: T[],
	initialQuery: string = '',
	initialCategory: string | null = null,
): {
	query: string;
	filterText: (query: string) => void;
	filterCategory: (category: string | null) => void;
	filteredItems: T[];
} {
	const [query, setQuery] = useState(initialQuery);
	const [currentCategory, setCurrentCategory] = useState<string | null>(initialCategory);
	const deferredQuery = useDeferredValue(query);

	const filteredItems: T[] = useMemo(() => {
		let filteredItemsByCategory = items;
		if (currentCategory !== null) {
			filteredItemsByCategory = items.filter((item) => categoryFilterCondition(item, currentCategory));
		}
		if (deferredQuery === '') return filteredItemsByCategory;
		return filteredItemsByCategory.filter(filterItemFunction<T>(deferredQuery));

	}, [deferredQuery, currentCategory, items]);

	const filterText = (query: string): void => {
		setQuery(query);
	};

	const filterCategory = (category: string | null): void => {
		setCurrentCategory(category);
	};

	return { query, filterText, filterCategory, filteredItems };
}

export default useFilter;
