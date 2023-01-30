import React, { useRef, useState } from 'react';
import { DtItemCart } from '../interfaces';
import DtItem from '../interfaces/dtItem';

interface IContext {
	shownItems: Array<DtItem>;
	deleteItem: (itemId: DtItem['id']) => void;
	addItem: (item: DtItemCart) => void;
	updateCount: (itemId: DtItem['id'], count: number) => void;
	isItemInCart: (id: DtItem['id']) => boolean;
	deleteAllItems: () => void;
	filterByText: (text: string) => void;
}

const CartItemContext = React.createContext<IContext>({
	shownItems: [],
	deleteItem: (itemId: DtItem['id']) => {},
	addItem: (item: DtItemCart) => {},
	updateCount: (itemId: DtItem['id'], count: number) => {},
	isItemInCart: (id: DtItem['id']) => false,
	deleteAllItems: () => {},
	filterByText: (text: string) => {},
});


const CartItemContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [cartItems, setCartItems] = useState<Array<DtItemCart>>([]);
	const [shownItems, setShownItems] = useState<Array<DtItem>>([]);
	const filterRef = useRef<(item: DtItem) => boolean>((_) => true);
	
	const deleteItem = (itemId: DtItem['id']) => {
		const itemsWithoutDeleted = cartItems.filter((item) => item.id != itemId);
		const shownItemsWithoutDeleted = shownItems.filter((item) => item.id != itemId);
		setCartItems(itemsWithoutDeleted);
		setShownItems(shownItemsWithoutDeleted);
	};

	const addItem = (item: DtItemCart) => {
		const newItems = [...cartItems, item];
		const newShownItems = newItems.filter(filterRef.current);
		setCartItems(newItems);
		setShownItems(newShownItems);
	};

	const updateCount = (itemId: DtItem['id'], count: number) => {
		const newItems = cartItems.map((item) => {
			if (item.id === itemId) {
				item.amount = count;
			}
			return item;
		});
		const newShownItems = newItems.filter(filterRef.current);
		setCartItems(newItems);
		setShownItems(newShownItems);
	};

	const deleteAllItems = () => {
		setCartItems([]);
		setShownItems([]);
	};

	const isItemInCart = (id: DtItem['id']) => cartItems.some((item) => item.id === id);

	const __filterItems = (filterFunction: (item: DtItem) => boolean) => {
		const filteredItems = cartItems.filter(filterFunction)
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
				shownItems,
				deleteItem,
				addItem,
				updateCount,
				isItemInCart,
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
