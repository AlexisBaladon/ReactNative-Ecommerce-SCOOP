import type { Order } from '../../firebase/models/orders';
import { type OrdersActions } from '../types/orders.types';
import { createOrder as _createOrder, getAllOrders } from '../../firebase/services/orders.services';

import type { User } from '../../firebase/models/user';

export const createOrder = (userId: User['userId'] | null, order: Order) => {
	return async (dispatch: (action: OrdersActions) => void) => {
		dispatch({ type: 'LOADING_ORDERS' });
		if (userId === null) {
			dispatch({ type: 'ADD_ORDER', error: new Error('User not logged in') });
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
			dispatch({ type: 'ADD_ORDER', orderId: data, order });
		} catch (error) {
			dispatch({ type: 'ADD_ORDER', error: error as Error });
		}
	};
};

export const claimOrderId = () => {
	return (dispatch: (action: OrdersActions) => void) => {
		dispatch({ type: 'CLAIM_ORDER_ID' });
	};
};

export const fetchOrders = (userId: User['userId'] | null) => {
	return async (dispatch: (action: OrdersActions) => void) => {
		dispatch({ type: 'LOADING_ORDERS' });
		if (userId === null) {
			return;
		}
		try {
			const data = await getAllOrders(userId);
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
