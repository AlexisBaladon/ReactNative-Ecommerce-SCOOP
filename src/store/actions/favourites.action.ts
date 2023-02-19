import { type DtItem } from '../../interfaces';
import { type FavouritesActions } from '../types/favourites.types';
import {
	addItemFavourites as _addItemFavourites,
	removeItemFavourites as _removeItemFavourites,
	removeAllItemsFavourites as _removeAllItemsFavourites,
} from '../../firebase/services/favourites.services';
import type { User } from '../../firebase/models/user';

export const addItemFavourites = (userId: User['userId'] | null, item: DtItem) => {
	return async (dispatch: (action: FavouritesActions) => void) => {
		if (userId === null) {
			return { type: 'ADD_ITEM_FAVOURITES', item };
		}
		try {
			const data = await _addItemFavourites(userId, item);
			if (data === undefined) {
				dispatch({ type: 'ADD_ITEM_FAVOURITES', error: new Error('Something went wrong') });
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'ADD_ITEM_FAVOURITES', error: data });
				return;
			}
			dispatch({ type: 'ADD_ITEM_FAVOURITES', item });
		} catch (error) {
			dispatch({ type: 'ADD_ITEM_FAVOURITES', error: error as Error });
		}
	};
};

export const removeItemFavourites = (userId: User['userId'] | null, itemId: DtItem['id']) => {
	return async (dispatch: (action: FavouritesActions) => void) => {
		if (userId === null) {
			dispatch({ type: 'REMOVE_ITEM_FAVOURITES', itemId });
			return;
		}
		try {
			const data = await _removeItemFavourites(userId, itemId);
			if (data === undefined) {
				dispatch({
					type: 'REMOVE_ITEM_FAVOURITES',
					error: new Error('Something went wrong'),
				});
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'REMOVE_ITEM_FAVOURITES', error: data });
				return;
			}
			dispatch({ type: 'REMOVE_ITEM_FAVOURITES', itemId });
		} catch (error) {
			dispatch({ type: 'REMOVE_ITEM_FAVOURITES', error: error as Error });
		}
	};
};

export const removeAllItemsFavourites = (userId: User['userId'] | null) => {
	return async (dispatch: (action: FavouritesActions) => void) => {
		if (userId === null) {
			dispatch({ type: 'REMOVE_ALL_ITEMS_FAVOURITES' });
			return;
		}
		try {
			const data = await _removeAllItemsFavourites(userId);
			if (data === undefined) {
				dispatch({
					type: 'REMOVE_ALL_ITEMS_FAVOURITES',
					error: new Error('Something went wrong'),
				});
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'REMOVE_ALL_ITEMS_FAVOURITES', error: data });
				return;
			}
			dispatch({ type: 'REMOVE_ALL_ITEMS_FAVOURITES' });
		} catch (error) {
			dispatch({ type: 'REMOVE_ALL_ITEMS_FAVOURITES', error: error as Error });
		}
	};
};
