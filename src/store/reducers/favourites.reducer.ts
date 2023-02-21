import type { FavouritesState, FavouritesActions } from '../types';

const initialState: FavouritesState = {
	items: [],
	error: null,
	loading: false,
};

const favouritesReducer = (
	state: FavouritesState = initialState,
	action: FavouritesActions,
): FavouritesState => {
	switch (action.type) {
		case 'ADD_ITEM_FAVOURITES':
			return {
				...state,
				items: action.item === undefined ? state.items : [...state.items, action.item],
				loading: false,
			};
		case 'REMOVE_ITEM_FAVOURITES':
			return {
				...state,
				items:
					action.itemId === undefined
						? state.items
						: state.items.filter((item) => item.id !== action.itemId),
				loading: false,
			};
		case 'REMOVE_ALL_ITEMS_FAVOURITES':
			return {
				...state,
				items: [],
				loading: false,
			};
		case 'FETCH_ITEMS_FAVOURITES':
			return {
				...state,
				items: action.items !== undefined ? action.items : [],
				loading: false,
			};
		case 'LOADING_FAVOURITES':
			return {
				...state,
				loading: true,
			};
		case 'ERROR_FAVOURITES':
			return {
				...state,
				error: action.error ?? state.error,
				loading: false,
			};
		default:
			return state;
	}
};

export default favouritesReducer;
