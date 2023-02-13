import { BUSINESS } from "../../constants";
import { items } from "../../data";
import type { DtItemCart } from "../../interfaces";
import type { CartActions } from '../types';

export interface StoreState {
    items: DtItemCart[],
    subtotal: number,
}

const initialState: StoreState = {
    items: [],
    subtotal: 0,
};

const { MIN_ITEMS_IN_CART, MAX_ITEMS_IN_CART } = BUSINESS;

const cartReducer = (state: StoreState = initialState, action: CartActions): StoreState => {
    const foundItem = items.find(item => item.id === action.itemId);
    const item = foundItem === undefined ? undefined : { ...foundItem, amount: action.counter ?? 1 };
    switch (action.type) {
        case 'ADD_ITEM_CART':
            return {
                ...state,
                items: item === undefined ? state.items : [...state.items, item],
                subtotal: item === undefined ? state.subtotal : state.subtotal + item.priceDollars,
            };
        case 'REMOVE_ITEM_CART':
            return {
                ...state,
                items: action.itemId === undefined ? state.items : state.items.filter(item => item.id !== action.itemId),
                subtotal: action.itemId === undefined ? state.subtotal : state.subtotal - (state.items.find(item => item.id === action.itemId)?.priceDollars ?? 0),
            };
        case 'REMOVE_ALL_ITEMS_CART':
            return initialState;
        case 'UPDATE_COUNTER_CART':
            return {
                ...state,
                items: state.items.map(
                    item => item.id !== action.itemId ? item: { 
                        ...item, 
                        amount: action.counter === undefined ? item.amount :
                            action.counter < MIN_ITEMS_IN_CART ? MIN_ITEMS_IN_CART :
                            action.counter > MAX_ITEMS_IN_CART ? MAX_ITEMS_IN_CART :
                            action.counter
                    }
                ),
                subtotal: state.items.reduce(
                    (subtotal, item) => item.id !== action.itemId ? subtotal : 
                        subtotal + (action.counter === undefined ? item.amount : action.counter) * item.priceDollars,
                    0
                ),
            };
        default:
            return state;
    }
}

export default cartReducer;