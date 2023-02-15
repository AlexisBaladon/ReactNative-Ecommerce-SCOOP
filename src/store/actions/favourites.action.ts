import { type DtItem } from '../../interfaces';
import { type FavouritesActions } from '../types/favourites.types';

export const addItemFavourites: (item: DtItem) => FavouritesActions = (item) => ({
	type: 'ADD_ITEM_FAVOURITES',
	item,
});

export const removeItemFavourites: (itemId: DtItem['id']) => FavouritesActions = (itemId) => ({
	type: 'REMOVE_ITEM_FAVOURITES',
	itemId,
});

export const removeAllItemsFavourites: () => FavouritesActions = () => ({
	type: 'REMOVE_ALL_ITEMS_FAVOURITES',
});
