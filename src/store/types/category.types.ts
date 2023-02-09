export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export type categoryT = {
    type: typeof SELECT_CATEGORY;
    payload: string;
};