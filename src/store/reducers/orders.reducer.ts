import type { OrdersState, OrdersActions } from '../types/orders.types';

const initialState: OrdersState = {
	orders: [],
	lastAddedOrderId: null,
	error: null,
	loading: false,
};

const ordersReducer = (state: OrdersState = initialState, action: OrdersActions): OrdersState => {
	const error = action.error !== undefined ? action.error : state.error;
	switch (action.type) {
		case 'ADD_ORDER':
			console.log(action.orderId);
			return {
				...state,
				orders: action.order === undefined ? state.orders : [...state.orders, action.order],
				loading: false,
				lastAddedOrderId:
					action.orderId === undefined ? state.lastAddedOrderId : action.orderId,
				error,
			};
		case 'GET_ORDERS':
			return {
				...state,
				orders: action.orders === undefined ? state.orders : action.orders,
				loading: false,
				error,
			};
		case 'CLAIM_ORDER_ID':
			return {
				...state,
				lastAddedOrderId: null,
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
