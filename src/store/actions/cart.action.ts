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
import { deleteAllCart, deleteCart, fetchCart, persistCart, updateCartAmount } from '../../db/cart';
import { hasConnection } from '../../helpers';

export const addItemCart = (userId: User['userId'] | null, item: DtItemCart) => {
	return async (dispatch: (action: CartActions) => void) => {
		dispatch({ type: 'ADD_ITEM_CART', item, counter: item.amount });
		try {
			await persistCart([item]);
			if (userId === null) return;
			const data = await _addItemCart(userId, item);
			if (data === undefined) {
				dispatch({
					type: 'ERROR_CART',
					itemId: item.id,
					error: new Error('Something went wrong'),
				});
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'ERROR_CART', itemId: item.id, error: data });
				return;
			}
		} catch (error) {
			dispatch({ type: 'ERROR_CART', itemId: item.id, error: error as Error });
		}
	};
};

export const removeItemCart = (userId: User['userId'] | null, itemId: DtItem['id']) => {
	return async (dispatch: (action: CartActions) => void) => {
		dispatch({ type: 'REMOVE_ITEM_CART', itemId });
		try {
			await deleteCart(itemId);
			if (userId === null) return;
			const data = await _removeItemCart(userId, itemId);
			if (data === undefined) {
				dispatch({ type: 'ERROR_CART', error: new Error('Something went wrong') });
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'ERROR_CART', error: data });
				return;
			}
		} catch (error) {
			dispatch({ type: 'ERROR_CART', error: error as Error });
		}
	};
};

export const removeAllItemsCart = (userId: User['userId'] | null) => {
	return async (dispatch: (action: CartActions) => void) => {
		dispatch({ type: 'REMOVE_ALL_ITEMS_CART' });
		try {
			await deleteAllCart();
			if (userId === null) return;
			const data = await removeAllCart(userId);
			if (data === undefined) {
				dispatch({
					type: 'ERROR_CART',
					error: new Error('Something went wrong'),
				});
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'ERROR_CART', error: data });
				return;
			}
		} catch (error) {
			dispatch({ type: 'ERROR_CART', error: error as Error });
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
		try {
			await updateCartAmount(itemId, itemCount);
			if (userId === null) return;
			const data = await updateItemCart(userId, itemId, itemCount);
			if (data === undefined) {
				dispatch({ type: 'ERROR_CART', error: new Error('Something went wrong') });
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'ERROR_CART', error: data });
				return;
			}
		} catch (error) {
			dispatch({ type: 'ERROR_CART', error: error as Error });
		}
	};
};

export const fetchItemsCart = (userId: User['userId'] | null) => {
	return async (dispatch: (action: CartActions) => void) => {
		dispatch({ type: 'LOADING_CART' });
		try {
			const hasInternet = await hasConnection();
			const data =
				hasInternet && userId != null ? await getItemsCart(userId) : await fetchCart();
			if (data === undefined) {
				dispatch({ type: 'ERROR_CART', error: new Error('Something went wrong') });
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'ERROR_CART', error: data });
				return;
			}
			dispatch({ type: 'GET_ITEMS_CART', items: data });
		} catch (error) {
			dispatch({ type: 'ERROR_CART', error: error as Error });
		}
	};
};
