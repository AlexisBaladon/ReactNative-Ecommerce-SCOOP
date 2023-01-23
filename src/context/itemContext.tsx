import React, { useState } from 'react';
import DtItem from '../interfaces/item';

interface IContext {
	items: Array<DtItem>;
	setItems: (items: Array<DtItem>) => void;
	shownItems: Array<DtItem>;
	setShownItems: (items: Array<DtItem>) => void;
	deleteItem: (itemId: DtItem['id']) => void;
	addItem: (item: DtItem) => void;
	deleteAllItems: () => void;
	filterByText: (text: string) => void;
}

const ItemContext = React.createContext<IContext>({
	items: [],
	setItems: (items: Array<DtItem>) => {},
	shownItems: [],
	setShownItems: (items: Array<DtItem>) => {},
	deleteItem: (itemId: DtItem['id']) => {},
	addItem: (item: DtItem) => {},
	deleteAllItems: () => {},
	filterByText: (text: string) => {},
});

const ItemContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [items, setItems] = useState<Array<DtItem>>([]);
	const [shownItems, setShownItems] = useState<Array<DtItem>>([]);
	const filterRef = React.useRef<(item: DtItem) => boolean>((_) => true);

	const deleteItem = (itemId: DtItem['id']) => {
		const itemsWithoutDeleted = items.filter((item) => item.id != itemId);
		const shownItemsWithoutDeleted = shownItems.filter((item) => item.id != itemId);
		setItems(itemsWithoutDeleted);
		setShownItems(shownItemsWithoutDeleted);
	};

	const addItem = (item: DtItem) => {
		const newItems = [...items, item];
		const newShownItems = newItems.filter(filterRef.current);
		setItems(newItems);
		setShownItems(newShownItems);
	};

	const deleteAllItems = () => {
		setItems([]);
		setShownItems([]);
	};

	const __filterItems = (filterFunction: (item: DtItem) => boolean) => {
		const filteredItems = items.filter(filterFunction);
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
		<ItemContext.Provider
			value={{
				items,
				setItems,
				shownItems,
				setShownItems,
				deleteItem,
				addItem,
				deleteAllItems,
				filterByText,
			}}
		>
			{children}
		</ItemContext.Provider>
	);
};

const Context = { ItemContextProvider, ItemContext };

export default Context;
