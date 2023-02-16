import type { DtItem } from "../interfaces"

export const findSimilarity = (item1: DtItem, item2: DtItem, maxPrice: number, minPrice: number): number => {
    let similarity = 0;
    const { price: item1Price, type: item1Type, categories: item1Categories } = item1;
    const { price: item2Price, type: item2Type, categories: item2Categories } = item2;

    const arrayAttributes1 = [item1Categories];
    const arrayAttributes2 = [item2Categories];
    const categoricalAttributes1 = [item1Type, ...item1Categories];
    const categoricalAttributes2 = [item2Type, ...item2Categories];
    const numericAttributes1 = [item1Price];
    const numericAttributes2 = [item2Price];

    // Set similarity between arrays
    arrayAttributes1.forEach((array, index) => {
        const intersection = new Set([...array, ...arrayAttributes2[index]]);
        const union = new Set([...array, ...arrayAttributes2[index]]);
        if (union.size !== 0) {
            similarity += intersection.size / union.size;
        }
    });

    // Hamming distance between categorical attributes
    categoricalAttributes1.forEach((item, index) => {
        if (item === categoricalAttributes2[index]) {
            similarity += 1;
        }
    });

    // Kronecker delta between numeric attributes normalized with min-max
    numericAttributes1.forEach((item, index) => {
        const normalizedItem = (item - minPrice) / (maxPrice - minPrice);
        const normalizedItem2 = (numericAttributes2[index] - minPrice) / (maxPrice - minPrice);
        const difference = Math.abs(normalizedItem - normalizedItem2);
        similarity += 1 - difference;
    });

    return similarity;
};

export const findClosestNeighbours = (item: DtItem, items: DtItem[], k: number): DtItem[] => {
    const maxPrice = Math.max(...items.map((item) => item.price));
    const minPrice = Math.min(...items.map((item) => item.price));

    const similarities = items.map((item2) => {
        return {
            item: item2,
            similarity: findSimilarity(item, item2, maxPrice, minPrice),
        };
    });

    similarities.sort((a, b) => b.similarity - a.similarity);

    return similarities.slice(0, k).map((item) => item.item);
}


