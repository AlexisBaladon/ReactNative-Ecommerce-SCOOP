import type { DtItem } from '../../interfaces';

export interface FavouritesState {
	items: DtItem[];
	error: Error | null;
	loading: boolean;
}
export type FavouritesActionTypes =
	| 'ADD_ITEM_FAVOURITES'
	| 'REMOVE_ITEM_FAVOURITES'
	| 'REMOVE_ALL_ITEMS_FAVOURITES'
	| 'FETCH_ITEMS_FAVOURITES'
	| 'LOADING_FAVOURITES'
	| 'ERROR_FAVOURITES'

export interface FavouritesActions {
	type: FavouritesActionTypes;
	itemId?: DtItem['id'];
	item?: DtItem;
	items?: DtItem[];
	error?: Error;
}
