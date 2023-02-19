import { type Order } from '../../firebase/models/orders';

export interface OrdersState {
	orders: Order[];
	error: Error | null;
}
export type OrdersActionTypes = 'ADD_ORDER' | 'GET_ORDERS';

export interface OrdersActions {
	type: OrdersActionTypes;
	order?: Order;
	orders?: Order[];
	error?: Error;
}
