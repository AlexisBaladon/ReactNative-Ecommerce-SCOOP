import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { FavouritesReducer, CartReducer, StoreReducer } from './reducers';
import type { FavouritesState, CartState, StoreState } from './types';

export interface ReduxStoreState {
	store: StoreState;
	cart: CartState;
	favourites: FavouritesState;
}

const rootReducer = combineReducers({
	store: StoreReducer,
	cart: CartReducer,
	favourites: FavouritesReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
