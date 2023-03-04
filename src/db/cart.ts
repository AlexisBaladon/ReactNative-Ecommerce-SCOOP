import type { DtItem, DtItemCart } from '../interfaces';
import { db } from './';

export const persistCart = async (items: DtItemCart[]): Promise<null | Error> => {
	return await new Promise((resolve, reject) => {
		db.transaction((tx) => {
			items.forEach((item) => {
				tx.executeSql(
					`
                    INSERT OR REPLACE INTO cart (
                        id,
                        title,
                        description,
                        pictureUrl,
                        price,
                        stock,
                        type,
                        categories,
                        amount
                    ) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
					[
						String(item.id),
						String(item.title),
						String(item.description),
						String(item.pictureUrl),
						Number(item.price),
						Number(item.stock),
						String(item.type),
						JSON.stringify(item.categories), // inserting an array violates first normal form but is simpler than creating a new table
						Number(item.amount),
					],
					() => {
						resolve(null);
					},
					(_, error) => {
						reject(error);
						return true;
					},
				);
			});
		});
	});
};

export const fetchCart = async (): Promise<DtItemCart[] | Error> => {
	return await new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`SELECT * FROM cart`,
				[],
				(_, result) => {
					const items = result.rows._array.map((item: any) => {
						return {
							...item,
							categories: JSON.parse(item.categories),
						};
					});
					resolve(items);
				},
				(_, error) => {
					reject(error);
					return true;
				},
			);
		});
	});
};

export const deleteCart = async (id: DtItem['id']): Promise<null | Error> => {
	return await new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`DELETE FROM cart WHERE id = ?`,
				[id],
				() => {
					resolve(null);
				},
				(_, error) => {
					reject(error);
					return true;
				},
			);
		});
	});
};

export const deleteAllCart = async (): Promise<null | Error> => {
	return await new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`DELETE FROM cart`,
				[],
				() => {
					resolve(null);
				},
				(_, error) => {
					reject(error);
					return true;
				},
			);
		});
	});
};

export const updateCartAmount = async (id: DtItem['id'], amount: number): Promise<null | Error> => {
	return await new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				`UPDATE cart SET amount = ? WHERE id = ?`,
				[amount, id],
				() => {
					resolve(null);
				},
				(_, error) => {
					reject(error);
					return true;
				},
			);
		});
	});
};
