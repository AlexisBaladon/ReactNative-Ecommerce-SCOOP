import { BUSINESS } from "../../constants";
import { items } from "../../data";
import type { DtItemCart } from "../../interfaces";
import type { CartActions } from '../types';

export interface StoreState {
    items: DtItemCart[],
}

const initialState: StoreState = {
    items: [],
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
            };
        case 'REMOVE_ITEM_CART':
            return {
                ...state,
                items: action.itemId === undefined ? state.items : state.items.filter(item => item.id !== action.itemId),
            };
        case 'REMOVE_ALL_ITEMS_CART':
            return {
                ...state,
                items: [],
            };
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
            };
        default:
            return state;
    }
}

export default cartReducer;