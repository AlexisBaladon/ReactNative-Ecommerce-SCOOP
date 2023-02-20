import type { DtItemCart, DtItem } from '../../interfaces';
import type { CartActions } from '../types/';
import {
	addItemCart as _addItemCart,
	removeItemCart as _removeItemCart,
	removeAllCart,
	getItemsCart,
	updateItemCart,
} from '../../firebase/services/cart.services';
import type { User } from '../../firebase/models/user';

export const addItemCart = (userId: User['userId'] | null, item: DtItemCart) => {
	return async (dispatch: (action: CartActions) => void) => {
		dispatch({ type: 'ADD_ITEM_CART', item, counter: item.amount });
		if (userId === null) return;
		try {
			const data = await _addItemCart(userId, item);
			if (data === undefined) {
				dispatch({ type: 'ADD_ITEM_CART', error: new Error('Something went wrong') });
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'ADD_ITEM_CART', error: data });
				return;
			}
			dispatch({ type: 'ADD_ITEM_CART', item, counter: item.amount });
		} catch (error) {
			dispatch({ type: 'ADD_ITEM_CART', error: error as Error });
		}
	};
};

export const removeItemCart = (userId: User['userId'] | null, itemId: DtItem['id']) => {
	return async (dispatch: (action: CartActions) => void) => {
		dispatch({ type: 'REMOVE_ITEM_CART', itemId });
		if (userId === null) return;
		try {
			const data = await _removeItemCart(userId, itemId);
			if (data === undefined) {
				dispatch({ type: 'REMOVE_ITEM_CART', error: new Error('Something went wrong') });
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'REMOVE_ITEM_CART', error: data });
				return;
			}
			dispatch({ type: 'REMOVE_ITEM_CART', itemId });
		} catch (error) {
			dispatch({ type: 'REMOVE_ITEM_CART', error: error as Error });
		}
	};
};

export const removeAllItemsCart = (userId: User['userId'] | null) => {
	return async (dispatch: (action: CartActions) => void) => {
		dispatch({ type: 'REMOVE_ALL_ITEMS_CART' });
		if (userId === null) return;
		try {
			const data = await removeAllCart(userId);
			if (data === undefined) {
				dispatch({
					type: 'REMOVE_ALL_ITEMS_CART',
					error: new Error('Something went wrong'),
				});
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'REMOVE_ALL_ITEMS_CART', error: data });
				return;
			}
			dispatch({ type: 'REMOVE_ALL_ITEMS_CART' });
		} catch (error) {
			dispatch({ type: 'REMOVE_ALL_ITEMS_CART', error: error as Error });
		}
	};
};

export const updateCounterCart = (
	userId: User['userId'] | null,
	itemId: DtItem['id'],
	itemCount: DtItemCart['amount'],
) => {
	return async (dispatch: (action: CartActions) => void) => {
		dispatch({ type: 'UPDATE_COUNTER_CART', itemId, counter: itemCount });
		if (userId === null) return;
		try {
			const data = await updateItemCart(userId, itemId, itemCount);
			if (data === undefined) {
				dispatch({ type: 'UPDATE_COUNTER_CART', error: new Error('Something went wrong') });
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'UPDATE_COUNTER_CART', error: data });
				return;
			}
			dispatch({ type: 'UPDATE_COUNTER_CART', itemId, counter: itemCount });
		} catch (error) {
			dispatch({ type: 'UPDATE_COUNTER_CART', error: error as Error });
		}
	};
};

export const fetchItemsCart = (userId: User['userId'] | null) => {
	return async (dispatch: (action: CartActions) => void) => {
		if (userId === null) {
			dispatch({ type: 'GET_ITEMS_CART' });
			return;
		}
		try {
			const data = await getItemsCart(userId);
			if (data === undefined) {
				dispatch({ type: 'GET_ITEMS_CART', error: new Error('Something went wrong') });
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'GET_ITEMS_CART', error: data });
				return;
			}
			dispatch({ type: 'GET_ITEMS_CART', items: data });
		} catch (error) {
			dispatch({ type: 'GET_ITEMS_CART', error: error as Error });
		}
	};
};
