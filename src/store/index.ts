import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { FavouritesReducer, CartReducer, StoreReducer, AuthReducer, OrdersReducer } from './reducers';
import type { FavouritesState, CartState, StoreState, AuthState, OrdersState } from './types';

export interface ReduxStoreState {
	store: StoreState;
	cart: CartState;
	favourites: FavouritesState;
	auth: AuthState;
	orders: OrdersState;
}

const rootReducer = combineReducers({
	store: StoreReducer,
	cart: CartReducer,
	favourites: FavouritesReducer,
	auth: AuthReducer,
	orders: OrdersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
