import { type Order } from '../../firebase/models/orders';

export interface OrdersState {
	orders: Order[];
	error: Error | null;
	loading: boolean;
}
export type OrdersActionTypes = 'ADD_ORDER' | 'GET_ORDERS' | 'LOADING';

export interface OrdersActions {
	type: OrdersActionTypes;
	order?: Order;
	orders?: Order[];
	error?: Error;
}
