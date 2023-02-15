import type { StoreActions } from "../types";
import { getItems as getItemsDB } from "../../firebase";

export const getStoreItems = (category?: string) => {
    return async (dispatch: (action: StoreActions) => void) => {
        try {
            const items = await getItemsDB(category);
            dispatch({
                type: 'GET_ITEMS',
                items,
            });
        }
        catch (error) {
            dispatch({
                type: 'ERROR_GET_ITEMS',
                error: error as Error,
            });
        }
    };
};