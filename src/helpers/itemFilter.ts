export interface FilterableItem {
    title: string,
    description: string,
}

export function itemFilterCondition<T extends FilterableItem>(item: T, query: string | null): boolean {
    if (query === null) return true;
    return item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase());
}

export function filterItems<T extends FilterableItem>(items: T[], query: string | null): T[] {
    return items.filter(item => itemFilterCondition(item, query));
}

export function filterItemFunction<T extends FilterableItem>(query: string | null): ((item: T) => boolean) {
    return (item: T) => itemFilterCondition(item, query);
}