import { type DtItem } from '../../interfaces';
import { storeTypes } from '../types/store.types';

const { GET_ITEMS_STORE, FILTER_ITEMS_STORE } = storeTypes;

export const getItemsStore: (itemId: DtItem['id']) => { type: string, itemId: DtItem['id'] } =
    (itemId) => ({ type: GET_ITEMS_STORE, itemId });

export const filterItems: (query: string) => { type: string, query: string } =
    (query) => ({ type: FILTER_ITEMS_STORE, query });