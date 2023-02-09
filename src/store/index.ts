import { createStore, combineReducers } from 'redux';

import CategoryReducer from './reducers/category';
import ProductReducer from './reducers/product';

const rootReducer = combineReducers({
    category: CategoryReducer,
    product: ProductReducer
});

export default createStore(rootReducer);

//in app

import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    )
}

//in consumers

import { useSelector, useDispatch } from 'react-redux';

const dispatch = useDispatch();
const categories = useSelector(state => state.category.categories);

dispatch({ type: 'STORE_CATEGORIES', payload: categories });
