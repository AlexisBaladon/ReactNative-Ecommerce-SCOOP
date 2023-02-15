import { BUSINESS } from '../../constants';
import type { DtItem, DtItemCart } from '../../interfaces';
import type { CartActions, CartState } from '../types';

const initialState: CartState = {
	items: [],
	totalItems: 0,
	subtotal: 0,
	carriage: 25,
	discountPercentage: 25,
	total: 0,
};

const getUpdatedCounter = (counter: number | undefined): number => {
	if (counter === undefined) return 0;
	if (counter < MIN_ITEMS_IN_CART) return MIN_ITEMS_IN_CART;
	if (counter > MAX_ITEMS_IN_CART) return MAX_ITEMS_IN_CART;
	return counter;
};

const getSubtotal = (state: CartState, action: CartActions): number => {
	return state.items.reduce((subtotal, item) => {
		if (item.id === action.itemId) {
			return subtotal + item.price * getUpdatedCounter(action.counter);
		}
		return subtotal + item.price * item.amount;
	}, 0);
};

const getItemPrice = (items: DtItem[], itemId: DtItem['id']): number => {
	return items.find((item) => item.id === itemId)?.price ?? 0;
};

const getItemAmount = (items: DtItemCart[], itemId: DtItemCart['id']): number => {
	return items.find((item) => item.id === itemId)?.amount ?? 0;
};

const updateTotalPrice = (
	subtotal: number,
	carriage: number,
	discountPercentage: number,
): number => {
	return subtotal * ((100 - discountPercentage) / 100) + carriage;
};

const updateItemsAmount = (
	items: DtItemCart[],
	itemId: DtItemCart['id'] | undefined,
	counter: number | undefined,
): number => {
	return items.reduce((totalItems, item) => {
		if (item.id === itemId) {
			return totalItems + getUpdatedCounter(counter);
		}
		return totalItems + item.amount;
	}, 0);
};

const { MIN_ITEMS_IN_CART, MAX_ITEMS_IN_CART } = BUSINESS;

const cartReducer = (state: CartState = initialState, action: CartActions): CartState => {
	const item: DtItemCart | undefined = action.item !== undefined ?
										{ ...action.item, amount: action.counter ?? 1 } :
										undefined;
	const { subtotal, carriage, discountPercentage, total } = state;

	switch (action.type) {
		case 'ADD_ITEM_CART':
			return {
				...state,
				items: item === undefined ? state.items : [...state.items, item],
				totalItems: item === undefined ? state.totalItems : state.totalItems + item.amount,
				subtotal:
					item === undefined ? subtotal : subtotal + item.price * item.amount,
				total:
					item === undefined
						? total
						: updateTotalPrice(
								subtotal + item.price * item.amount,
								carriage,
								discountPercentage,
						  ),
			};
		case 'REMOVE_ITEM_CART':
			return {
				...state,
				items:
					action.itemId === undefined
						? state.items
						: state.items.filter((item) => item.id !== action.itemId),
				totalItems:
					action.itemId === undefined
						? state.totalItems
						: state.totalItems - getItemAmount(state.items, action.itemId),
				subtotal:
					action.itemId === undefined
						? subtotal
						: subtotal - getItemPrice(state.items, action.itemId),
				total:
					action.itemId === undefined
						? total
						: total - getItemPrice(state.items, action.itemId),
			};
		case 'REMOVE_ALL_ITEMS_CART':
			return initialState;
		case 'UPDATE_COUNTER_CART':
			return {
				...state,
				items: state.items.map((item) =>
					item.id !== action.itemId
						? item
						: {
								...item,
								amount: getUpdatedCounter(action.counter),
						  },
				),
				totalItems: updateItemsAmount(state.items, action.itemId, action.counter),
				subtotal: getSubtotal(state, action),
				total: updateTotalPrice(getSubtotal(state, action), carriage, discountPercentage),
			};
		default:
			return state;
	}
};

export default cartReducer;
