import type { DtItem } from "../interfaces";
import { db } from "./";

export const persistFavourites = async (items: DtItem[]): Promise<null | Error> => {
    return await new Promise((resolve, reject) => {
        db.transaction((tx) => {
            items.forEach((item) => {
                tx.executeSql(`
                    INSERT OR REPLACE INTO favourites (
                        id,
                        title,
                        description,
                        pictureUrl,
                        price,
                        stock,
                        type,
                        categories
                    ) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [
                        String(item.id), 
                        String(item.title), 
                        String(item.description), 
                        String(item.pictureUrl), 
                        Number(item.price), 
                        Number(item.stock),
                        String(item.type), 
                        JSON.stringify(item.categories) // inserting an array violates first normal form but is simpler than creating a new table
                    ], 
                    () => {resolve(null)},
                    (_, error) => {
                        reject(error);
                        return true;
                    }
                );
            });
        });
    });
}

export const fetchFavourites = async (): Promise<DtItem[] | Error> => {
    return await new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM favourites`, 
                [],
                (_, result) => {
                    const items = result.rows._array.map((item: any) => {
                        return {
                            ...item,
                            categories: JSON.parse(item.categories)
                        }
                    });
                    resolve(items);
                },
                (_, error) => {
                    reject(error);
                    return true;
                }
            );
        });
    });
}

export const deleteFavourite = async (id: DtItem['id']): Promise<null | Error> => {
    return await new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `DELETE FROM favourites WHERE id = ?`, 
                [id],
                () => {resolve(null)},
                (_, error) => {
                    reject(error);
                    return true;
                }
            );
        });
    });
}

export const deleteAllFavourites = async (): Promise<null | Error> => {
    return await new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `DELETE FROM favourites`, 
                [],
                () => {resolve(null)},
                (_, error) => {
                    reject(error);
                    return true;
                }
            );
        });
    });
}