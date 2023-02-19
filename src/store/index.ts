import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { FavouritesReducer, CartReducer, StoreReducer, AuthReducer } from './reducers';
import type { FavouritesState, CartState, StoreState, AuthState } from './types';

export interface ReduxStoreState {
	store: StoreState;
	cart: CartState;
	favourites: FavouritesState;
	auth: AuthState;
}

const rootReducer = combineReducers({
	store: StoreReducer,
	cart: CartReducer,
	favourites: FavouritesReducer,
	auth: AuthReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
