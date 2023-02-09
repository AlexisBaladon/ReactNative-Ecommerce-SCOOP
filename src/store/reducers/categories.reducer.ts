const initialState = {
    categories: [],
};

const categoriesReducer = (state = initialState, action: any): string[] => {
    switch (action.type) {
        case 'STORE_CATEGORIES':
            return {
                ...state,
                categories: action.payload,
            };
        default:
            return state;
    }
}

export default categoriesReducer;