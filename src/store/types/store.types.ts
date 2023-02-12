import { type DtItem } from "../../interfaces";

export const storeTypes = {
};

export interface StoreState {
    items: DtItem[],
}

export interface StoreActions {
    itemId?: DtItem['id'],
}