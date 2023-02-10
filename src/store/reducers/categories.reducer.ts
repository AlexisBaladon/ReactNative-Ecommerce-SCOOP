interface CategoryActions {
    type: 'STORE_CATEGORIES', 
    categories: string[] 
};

interface StoreState {
    categories: string[],
    selected: string | null,
};

const initialState = {
    categories: [],
    selected: null,
};

const categoriesReducer = (state = initialState, action: CategoryActions): string[] => {
    switch (action.type) {
        case 'STORE_CATEGORIES':
            return {
                ...state,
                categories: action.categories,
            };
        default:
            return state;
    }
}

export default categoriesReducer;