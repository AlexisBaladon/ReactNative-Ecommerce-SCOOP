import type { DtItem, DtItemCart } from '../../interfaces';

export interface CartState {
	items: DtItemCart[];
	categories: string[];
	totalItems: number;
	subtotal: number;
	carriage: number;
	discountPercentage: number;
	total: number;
	loading: boolean;
	error: Error | null;
}

export type CartActionTypes =
	| 'ADD_ITEM_CART'
	| 'REMOVE_ITEM_CART'
	| 'REMOVE_ALL_ITEMS_CART'
	| 'UPDATE_COUNTER_CART'
	| 'GET_ITEMS_CART'
	| 'LOADING_CART'
	| 'ERROR_CART';

export interface CartActions {
	type: CartActionTypes;
	item?: DtItem;
	itemId?: DtItem['id'];
	items?: DtItemCart[];
	counter?: number;
	error?: Error;
}
