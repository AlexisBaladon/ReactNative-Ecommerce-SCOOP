import type { DtItem } from '../../interfaces';

export interface FavouritesState {
	items: DtItem[];
}
export type FavouritesActionTypes =
	| 'ADD_ITEM_FAVOURITES'
	| 'REMOVE_ITEM_FAVOURITES'
	| 'REMOVE_ALL_ITEMS_FAVOURITES';

export interface FavouritesActions {
	type: FavouritesActionTypes;
	itemId?: DtItem['id'];
	item?: DtItem;
}
