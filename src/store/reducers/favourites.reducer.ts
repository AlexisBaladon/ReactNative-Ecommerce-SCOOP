import type { FavouritesState, FavouritesActions } from '../types';

const initialState: FavouritesState = {
	items: [],
};

const favouritesReducer = (
	state: FavouritesState = initialState,
	action: FavouritesActions,
): FavouritesState => {
	switch (action.type) {
		case 'ADD_ITEM_FAVOURITES':
			console.log('ADD_ITEM_FAVOURITES', action);
			return {
				...state,
				items: action.item === undefined ? state.items : [...state.items, action.item],
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
