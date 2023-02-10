import { type DtItem } from "../interfaces";

export const itemFilterCondition = (item: DtItem, query: string | null): boolean => {
    if (query === null) return true;
    return item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase());
}

export const filterItems = (items: DtItem[], query: string | null): DtItem[] => {
    return items.filter(item => itemFilterCondition(item, query));
}

export const filterItemFunction = (query: string | null): ((item: DtItem) => boolean) => {
    return (item: DtItem) => itemFilterCondition(item, query);
}