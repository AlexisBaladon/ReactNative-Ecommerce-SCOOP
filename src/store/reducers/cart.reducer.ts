import { type DtItem } from "../../interfaces";
import { type CartActionTypes } from '../types/cart.types';

export interface StoreState {
    items: DtItem[],
}

const initialState: StoreState = {
    items: [],
};

const cartReducer = (
    state: StoreState = initialState, 
    action: { type: CartActionTypes, itemId?: DtItem['id'] }
): StoreState => {
    let item: DtItem | undefined;
    if (action.itemId !== undefined) { item = state.items.find(item => item.id === action.itemId) };
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
        default:
            return state;
    }
}

export default cartReducer;