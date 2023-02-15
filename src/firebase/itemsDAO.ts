import { API_URL } from "./env";
import type { DtItem } from "../interfaces";

export const getItem = async (id: string): Promise<DtItem | Error | undefined> => {
    try {
        const response = await fetch(`${API_URL}/items/${id}.json`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error as Error);
        return error as Error;
    }
};

export const getItems = async (category?: string): Promise<DtItem[]> => {
    const response = await fetch(`${API_URL}/items.json`);
    let data = await response.json();
    data = Object.keys(data).map((key) => ({ ...data[key], id: key }));
    console.log('DATA', data);
    return data;
};