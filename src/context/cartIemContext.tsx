import React, { useMemo, useRef, useState } from 'react';
import { DtItemCart } from '../interfaces';

interface IContext {
	shownItems: Array<DtItemCart>;
	findItem: (id: DtItemCart['id']) => DtItemCart | undefined;
	deleteItem: (itemId: DtItemCart['id']) => void;
	addItem: (item: DtItemCart) => void;
	updateCount: (itemId: DtItemCart['id'], count: number) => void;
	isItemInCart: (id: DtItemCart['id']) => boolean;
	deleteAllItems: () => void;
	filterByText: (text: string) => void;
}

const CartItemContext = React.createContext<IContext>({
	shownItems: [],
	findItem: (id: DtItemCart['id']) => undefined,
	deleteItem: (itemId: DtItemCart['id']) => {},
	addItem: (item: DtItemCart) => {},
	updateCount: (itemId: DtItemCart['id'], count: number) => {},
	isItemInCart: (id: DtItemCart['id']) => false,
	deleteAllItems: () => {},
	filterByText: (text: string) => {},
});


const CartItemContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [cartItems, setCartItems] = useState<Array<DtItemCart>>([]);
	const [query, setQuery] = useState<string>('');
	const filterRef = useRef<(item: DtItemCart) => boolean>((_) => true);

	const shownItems = useMemo(() => {
		return cartItems.filter(filterRef.current);
	}
	, [cartItems, query]);
	
	const findItem = (id: DtItemCart['id']) => {
		return cartItems.find((item) => item.id === id);
	};

	const deleteItem = (itemId: DtItemCart['id']) => {
		setCartItems(cartItems => {
			return [...cartItems.filter((item) => item.id !== itemId)]
		});
	};

	const addItem = (item: DtItemCart) => {
		const newItems = [...cartItems, item];
		setCartItems(newItems);
	};

	const updateCount = (itemId: DtItemCart['id'], count: number) => {
		setCartItems((cartItems) => {
			return cartItems.map((item) => {
				if (item.id === itemId) {
					console.log('actualizando item', count);
					item.amount = count;
				}
				return {...item};
			});
		});
	};

	const deleteAllItems = () => {
		setCartItems([]);
	};

	const isItemInCart = (id: DtItemCart['id']) => cartItems.some((item) => item.id === id);

	const filterByText = (text: string) => {
		const filterItemsSearch = (item: DtItemCart) => {
			return (
				item.title.toLowerCase().includes(text.toLowerCase()) ||
				item.description.toLowerCase().includes(text.toLowerCase()) ||
				text === ''
			);
		};
		filterRef.current = filterItemsSearch;
		setQuery(text);
	};

	return (
		<CartItemContext.Provider
			value={{
				shownItems,
				findItem,
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
