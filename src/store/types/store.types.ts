import { type DtItem } from '../../interfaces';

export type StoreActionTypes = 
    'GET_ITEMS' |
    'ERROR_GET_ITEMS';

export interface StoreState {
    items: DtItem[],
    error?: Error,
}

export interface StoreActions {
    category?: string,
    type: StoreActionTypes,
    items?: DtItem[],
    error?: Error,
}
