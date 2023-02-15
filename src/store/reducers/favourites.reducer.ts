import { type DtItem } from '../../interfaces';
import type { FavouritesState, FavouritesActions } from '../types';
import { items } from '../../data';

const initialState: FavouritesState = {
	items: [],
};

const favouritesReducer = (
	state: FavouritesState = initialState,
	action: FavouritesActions,
): FavouritesState => {
	let item: DtItem | undefined;
	if (action.itemId !== undefined) {
		item = items.find((item) => item.id === action.itemId);
	}
	switch (action.type) {
		case 'ADD_ITEM_FAVOURITES':
			return {
				...state,
				items: item === undefined ? state.items : [...state.items, item],
			};
		case 'REMOVE_ITEM_FAVOURITES':
			return {
				...state,
				items:
					action.itemId === undefined
						? state.items
						: state.items.filter((item) => item.id !== action.itemId),
			};
		case 'REMOVE_ALL_ITEMS_FAVOURITES':
			return {
				...state,
				items: [],
			};
		default:
			return state;
	}
};

export default favouritesReducer;
