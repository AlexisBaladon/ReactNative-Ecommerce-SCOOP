import { createStore, combineReducers } from 'redux';

import { FavouritesReducer } from './reducers';
import type { FavouritesState } from './types';

export interface StoreState {
    favourites: FavouritesState,
}

const rootReducer = combineReducers({
    favourites: FavouritesReducer,
});

export default createStore(rootReducer);

// in app

// import { Provider } from 'react-redux';

// const App = () => {
//     return (
//         <Provider store={store}>
//             <AppNavigator />
//         </Provider>
//     )
// }

// //in consumers

// import { useSelector, useDispatch } from 'react-redux';

// const dispatch = useDispatch();
// const categories = useSelector(state => state.category.categories);

// dispatch({ type: 'STORE_CATEGORIES', payload: categories });
