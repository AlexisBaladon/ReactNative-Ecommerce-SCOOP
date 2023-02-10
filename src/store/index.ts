import { createStore, combineReducers } from 'redux';

import { FavouritesReducer, CartReducer } from './reducers';
import type { FavouritesState, CartState } from './types';

export interface StoreState {
    favourites: FavouritesState,
    cart: CartState,
}

const rootReducer = combineReducers({
    favourites: FavouritesReducer,
    cart: CartReducer,
});

export default createStore(rootReducer);