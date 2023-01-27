import React, { useState } from 'react';
import DtItem from '../interfaces/item';

interface IContext {
	favouritesItems: Array<DtItem>;
	shownItems: Array<DtItem>;
	deleteItem: (itemId: DtItem['id']) => void;
	addItem: (item: DtItem) => void;
	deleteAllItems: () => void;
	filterByText: (text: string) => void;
}

const FavouritesItemContext = React.createContext<IContext>({
	favouritesItems: [],
	shownItems: [],
	deleteItem: (itemId: DtItem['id']) => {},
	addItem: (item: DtItem) => {},
	deleteAllItems: () => {},
	filterByText: (text: string) => {},
});

const FavouritesItemContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [favouritesItems, setFavouritesItems] = useState<Array<DtItem>>([]);
	const [shownItems, setShownItems] = useState<Array<DtItem>>([]);
	const filterRef = React.useRef<(item: DtItem) => boolean>((_) => true);

	const deleteItem = (itemId: DtItem['id']) => {
		const itemsWithoutDeleted = favouritesItems.filter((item) => item.id != itemId);
		const shownItemsWithoutDeleted = shownItems.filter((item) => item.id != itemId);
		setFavouritesItems(itemsWithoutDeleted);
		setShownItems(shownItemsWithoutDeleted);
	};

	const addItem = (item: DtItem) => {
		if (favouritesItems.find((item) => item.id === item.id)) return;
		const newItems = [...favouritesItems, item];
		const newShownItems = newItems.filter(filterRef.current);
		setFavouritesItems(newItems);
		setShownItems(newShownItems);
	};

	const deleteAllItems = () => {
		setFavouritesItems([]);
		setShownItems([]);
	};

	const __filterItems = (filterFunction: (item: DtItem) => boolean) => {
		const filteredItems = favouritesItems.filter(filterFunction);
		setShownItems(filteredItems);
		filterRef.current = filterFunction;
	};

	const filterByText = (text: string) => {
		const filterItemsSearch = (item: DtItem) => {
			return (
				item.title.toLowerCase().includes(text.toLowerCase()) ||
				item.description.toLowerCase().includes(text.toLowerCase()) ||
				text === ''
			);
		};
		__filterItems(filterItemsSearch);
	};

	return (
		<FavouritesItemContext.Provider
			value={{
				favouritesItems,
				shownItems,
				deleteItem,
				addItem,
				deleteAllItems,
				filterByText,
			}}
		>
			{children}
		</FavouritesItemContext.Provider>
	);
};

const Context = { FavouritesItemContextProvider, FavouritesItemContext };

export default Context;
