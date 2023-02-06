import React, { useMemo, useRef, useState } from 'react';
import type DtItem from '../interfaces/dtItem';

interface IContext {
	favouritesItems: DtItem[];
	shownItems: DtItem[];
	deleteItem: (itemId: DtItem['id']) => void;
	addItem: (item: DtItem) => void;
	deleteAllItems: () => void;
	itemExists: (itemId: DtItem['id']) => boolean;
	filterByText: (text: string) => void;
}

const FavouriteItemsContext = React.createContext<IContext>({
	favouritesItems: [],
	shownItems: [],
	deleteItem: (itemId: DtItem['id']) => {},
	addItem: (item: DtItem) => {},
	deleteAllItems: () => {},
	itemExists: (itemId: DtItem['id']) => false,
	filterByText: (text: string) => {},
});

const FavouriteItemsContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [favouritesItems, setFavouritesItems] = useState<DtItem[]>([]);
	const [query, setQuery] = useState<string>('');
	const filterRef = useRef<(item: DtItem) => boolean>((_) => true);

	const shownItems = useMemo(
		() => favouritesItems.filter(filterRef.current),
		[favouritesItems, query],
	);

	const deleteItem = (itemId: DtItem['id']): void => {
		const newItems = favouritesItems.filter((item) => item.id !== itemId);
		setFavouritesItems(newItems);
	};

	const addItem = (item: DtItem): void => {
		if (favouritesItems.some((favouriteItem) => favouriteItem.id === item.id)) return;
		const newItems = [...favouritesItems, item];
		setFavouritesItems(newItems);
	};

	const deleteAllItems = (): void => {
		setFavouritesItems([]);
	};

	const filterByText = (text: string): void => {
		const filterItemsSearch = (item: DtItem): boolean => {
			return (
				item.title.toLowerCase().includes(text.toLowerCase()) ||
				item.description.toLowerCase().includes(text.toLowerCase()) ||
				text === ''
			);
		};
		filterRef.current = filterItemsSearch;
		setQuery(text);
	};

	const itemExists = (itemId: DtItem['id']): boolean =>
		favouritesItems.some((item) => item.id === itemId);

	return (
		<FavouriteItemsContext.Provider
			value={{
				favouritesItems,
				shownItems,
				deleteItem,
				addItem,
				deleteAllItems,
				itemExists,
				filterByText,
			}}
		>
			{children}
		</FavouriteItemsContext.Provider>
	);
};

const Context = { FavouriteItemsContextProvider, FavouriteItemsContext };

export default Context;
