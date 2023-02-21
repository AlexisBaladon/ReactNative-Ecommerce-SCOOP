import { type DtItem } from '../../interfaces';

export type SortAttribute = 'title' | 'price' | 'type';

export type ItemFetchParameters = {
	orderBy?: SortAttribute;
	orderDirection?: 'asc' | 'desc';
	type?: string;
};

export type StoreActionTypes = 'GET_ITEMS' | 'ERROR' | 'LOADING_STORE';

export interface StoreState {
	items: DtItem[];
	categories: string[];
	error: Error | null;
	loading: boolean;
}

export interface StoreActions {
	category?: string;
	type: StoreActionTypes;
	items?: DtItem[];
	error?: Error;
}
