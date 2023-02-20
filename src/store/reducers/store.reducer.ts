import type { StoreActions, StoreState } from '../types';

const initialState: StoreState = {
	items: [],
	error: null,
	loading: false,
};

const storeReducer = (state: StoreState = initialState, action?: StoreActions): StoreState => {
	const error = action?.error ?? state.error;

	switch (action?.type) {
		case 'GET_ITEMS':
			return {
				...state,
				items: action.items !== undefined ? action.items : [],
				loading: false,
				error,
			};
		case 'LOADING_STORE':
			return {
				...state,
				loading: true,
				error,
			};
		case 'ERROR':
			return {
				...state,
				loading: false,
				error,
			};
		default:
			return state;
	}
};

export default storeReducer;
