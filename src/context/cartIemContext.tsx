import React, { useState } from 'react';
import DtItem from '../interfaces/item';

interface IContext {
	cartItems: Array<DtItem>;
	shownItems: Array<DtItem>;
	deleteItem: (itemId: DtItem['id']) => void;
	addItem: (item: DtItem) => void;
	deleteAllItems: () => void;
	filterByText: (text: string) => void;
}

const CartItemContext = React.createContext<IContext>({
	cartItems: [],
	shownItems: [],
	deleteItem: (itemId: DtItem['id']) => {},
	addItem: (item: DtItem) => {},
	deleteAllItems: () => {},
	filterByText: (text: string) => {},
});

const CartItemContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [cartItems, setCartItems] = useState<Array<DtItem>>([]);
	const [shownItems, setShownItems] = useState<Array<DtItem>>([]);
	const filterRef = React.useRef<(item: DtItem) => boolean>((_) => true);

	const deleteItem = (itemId: DtItem['id']) => {
		const itemsWithoutDeleted = cartItems.filter((item) => item.id != itemId);
		const shownItemsWithoutDeleted = shownItems.filter((item) => item.id != itemId);
		setCartItems(itemsWithoutDeleted);
		setShownItems(shownItemsWithoutDeleted);
	};

	const addItem = (item: DtItem) => {
		if (cartItems.some((item) => item.id === item.id)) return;
		const newItems = [...cartItems, item];
		const newShownItems = newItems.filter(filterRef.current);
		setCartItems(newItems);
		setShownItems(newShownItems);
	};

	const deleteAllItems = () => {
		setCartItems([]);
		setShownItems([]);
	};

	const __filterItems = (filterFunction: (item: DtItem) => boolean) => {
		const filteredItems = cartItems.filter(filterFunction);
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
		<CartItemContext.Provider
			value={{
				cartItems,
				shownItems,
				deleteItem,
				addItem,
				deleteAllItems,
				filterByText,
			}}
		>
			{children}
		</CartItemContext.Provider>
	);
};

const Context = { CartItemContextProvider, CartItemContext };

export default Context;
