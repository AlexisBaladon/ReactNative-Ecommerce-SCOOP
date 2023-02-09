import { type DtItem } from "../../interfaces";

const initialState = {
    items: [],
};

const storeReducer = (state = initialState, action: any): DtItem[] => {
    switch (action.type) {
        case 'STORE_ITEMS':
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
}

export default storeReducer;