import { items } from "../../data";
import type { StoreActions, StoreState } from "../types";

const initialState: StoreState = {
    items,
};

const storeReducer = (state: StoreState = initialState, action?: StoreActions): StoreState => {
    return state;
}

export default storeReducer;