import React, { useMemo, useRef, useState } from 'react';
import DtItem from '../interfaces/dtItem';

interface IContext {
	favouritesItems: Array<DtItem>;
	shownItems: Array<DtItem>;
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
	const [favouritesItems, setFavouritesItems] = useState<Array<DtItem>>([]);
	const [query, setQuery] = useState<string>('');
	const filterRef = useRef<(item: DtItem) => boolean>((_) => true);

	const shownItems = useMemo(
		() => favouritesItems.filter(filterRef.current),
		[favouritesItems, query],
	);

	const deleteItem = (itemId: DtItem['id']) => {
		const newItems = favouritesItems.filter((item) => item.id !== itemId);
		setFavouritesItems(newItems);
	};

	const addItem = (item: DtItem) => {
		if (favouritesItems.some((favouriteItem) => favouriteItem.id === item.id)) return;
		const newItems = [...favouritesItems, item];
		setFavouritesItems(newItems);
	};

	const deleteAllItems = () => {
		setFavouritesItems([]);
	};

	const filterByText = (text: string) => {
		const filterItemsSearch = (item: DtItem) => {
			return (
				item.title.toLowerCase().includes(text.toLowerCase()) ||
				item.description.toLowerCase().includes(text.toLowerCase()) ||
				text === ''
			);
		};
		filterRef.current = filterItemsSearch;
		setQuery(text);
	};

	const itemExists = (itemId: DtItem['id']) => favouritesItems.some((item) => item.id === itemId);

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
