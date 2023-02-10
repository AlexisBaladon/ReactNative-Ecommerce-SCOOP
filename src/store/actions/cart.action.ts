import { type DtItem } from '../../interfaces';
import type { CartActions } from '../types/';

export const addItemCart: (itemId: DtItem['id'], counter?: number) => CartActions =
    (itemId, counter) => ({ type: "ADD_ITEM_CART", itemId, counter });

export const removeItemCart: (itemId: DtItem['id']) => CartActions =
    (itemId) => ({ type: 'REMOVE_ITEM_CART', itemId });

export const removeAllItemsCart: () => CartActions =
    () => ({ type: 'REMOVE_ALL_ITEMS_CART' });

export const updateCounterCart: (itemId: DtItem['id'], counter: number) => CartActions =
    (itemId, counter) => ({ type: 'UPDATE_COUNTER_CART', itemId, counter });