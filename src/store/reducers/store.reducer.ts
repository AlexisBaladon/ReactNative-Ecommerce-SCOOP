import { type DtItem } from "../../interfaces";
import { items } from "../../data";

interface StoreState {
    items: DtItem[],
    filterCondition: string | null,
    selectedItem: DtItem | null,
}

const initialState: StoreState = {
    items,
    filterCondition: null,
    selectedItem: null,
};

const storeReducer = (state: StoreState = initialState, action: any): StoreState => {
    switch (action.type) {
        case 'SELECT_ITEM':
            return {
                ...state,
                selectedItem: state.items.find(item => item.id === action.itemId) ?? null,
            };
        case 'FILTER_ITEMS':
            return {
                ...state,
                filterCondition: action.query,
            };
            
        default:
            return state;
    }
}

export default storeReducer;