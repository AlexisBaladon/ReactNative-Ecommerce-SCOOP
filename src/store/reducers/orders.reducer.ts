import type { OrdersState, OrdersActions } from '../types/orders.types';

const initialState: OrdersState = {
	orders: [],
	error: null,
	loading: false,
};

const ordersReducer = (state: OrdersState = initialState, action: OrdersActions): OrdersState => {
	const error = action.error !== undefined ? action.error : state.error;
	switch (action.type) {
		case 'ADD_ORDER':
			return {
				...state,
				orders: action.order === undefined ? state.orders : [...state.orders, action.order],
				loading: false,
				error,
			};
		case 'GET_ORDERS':
			return {
				...state,
				orders: action.orders === undefined ? state.orders : action.orders,
				loading: false,
				error,
			};
		case 'LOADING_ORDERS':
			return {
				...state,
				loading: true,
				error,
			};
		default:
			return state;
	}
};

export default ordersReducer;
