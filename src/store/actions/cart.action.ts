import { type DtItem } from '../../interfaces';
import { type CartActionTypes } from '../types/cart.types';

export const addItemCart: (item: DtItem) => { type: CartActionTypes, item: DtItem } =
    (item) => ({ type: 'ADD_ITEM_CART', item });

export const removeItemCart: (query: string) => { type: CartActionTypes, query: string } =
    (query) => ({ type: 'REMOVE_ITEM_CART', query });

export const removeAllItemsCart: () => { type: CartActionTypes } =
    () => ({ type: 'REMOVE_ALL_ITEMS_CART' });