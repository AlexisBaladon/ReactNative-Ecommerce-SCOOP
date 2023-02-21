import { type Order } from '../../firebase/models/orders';

export interface OrdersState {
	orders: Order[];
	lastAddedOrderId: Order['id'] | null;
	error: Error | null;
	loading: boolean;
}
export type OrdersActionTypes = 'ADD_ORDER' | 'GET_ORDERS' | 'LOADING_ORDERS' | 'CLAIM_ORDER_ID';

export interface OrdersActions {
	type: OrdersActionTypes;
	order?: Order;
	orderId?: Order['id'];
	orders?: Order[];
	error?: Error;
}
