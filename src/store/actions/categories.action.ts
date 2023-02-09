import { type categoryT } from '../../interfaces';

export const selectCategory = (category: categoryT) => ({
    type: SELECT_CATEGORY,
    payload: category,
});