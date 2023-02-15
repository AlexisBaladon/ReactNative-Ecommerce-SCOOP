import type { StoreActions, StoreState } from "../types";

const initialState: StoreState = {
    items: [],
};

const storeReducer = (state: StoreState = initialState, action?: StoreActions): StoreState => {
    switch (action?.type) {
        case 'GET_ITEMS':
            return {
                ...state,
                items: action.items !== undefined ? action.items : [],
            };
        case 'ERROR_GET_ITEMS':
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}

export default storeReducer;