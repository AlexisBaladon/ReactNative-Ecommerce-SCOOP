import type { Order } from '../../firebase/models/orders';
import { type OrdersActions } from '../types/orders.types';
import {
	createOrder as _createOrder,
	getOrders as _getOrders,
} from '../../firebase/services/orders.services';

import type { User } from '../../firebase/models/user';

export const createOrder = (userId: User['userId'] | null, order: Order) => {
	return async (dispatch: (action: OrdersActions) => void) => {
		if (userId === null) {
			dispatch({ type: 'ADD_ORDER', order });
			return;
		}
		try {
			const data = await _createOrder(order, userId);
			if (data === undefined) {
				dispatch({ type: 'ADD_ORDER', error: new Error('Something went wrong') });
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'ADD_ORDER', error: data });
				return;
			}
			dispatch({ type: 'ADD_ORDER', order });
		} catch (error) {
			dispatch({ type: 'ADD_ORDER', error: error as Error });
		}
	};
};

export const getOrders = (userId: User['userId'] | null) => {
	return async (dispatch: (action: OrdersActions) => void) => {
		if (userId === null) {
			dispatch({ type: 'GET_ORDERS' });
			return;
		}
		try {
			const data = await _getOrders(userId);
			if (data === undefined) {
				dispatch({ type: 'GET_ORDERS', error: new Error('Something went wrong') });
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'GET_ORDERS', error: data });
				return;
			}
			dispatch({ type: 'GET_ORDERS', orders: data });
		} catch (error) {
			dispatch({ type: 'GET_ORDERS', error: error as Error });
		}
	};
};
