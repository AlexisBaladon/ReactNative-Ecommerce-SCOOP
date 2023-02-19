import type { OrdersState, OrdersActions } from '../types/orders.types';

const initialState: OrdersState = {
	orders: [],
	error: null,
};

const ordersReducer = (state: OrdersState = initialState, action: OrdersActions): OrdersState => {
	switch (action.type) {
		case 'ADD_ORDER':
			return {
				...state,
				orders: action.order === undefined ? state.orders : [...state.orders, action.order],
				error: action.error === undefined ? state.error : action.error,
			};
		case 'GET_ORDERS':
			return {
				...state,
				orders: action.orders === undefined ? state.orders : action.orders,
				error: action.error === undefined ? state.error : action.error,
			};
		default:
			return state;
	}
};

export default ordersReducer;
