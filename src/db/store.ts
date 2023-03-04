import { type DtItem } from '../interfaces';
import type { ItemFetchParameters } from '../store/types';
import { db } from './';

export const persistStore = async (items: DtItem[]): Promise<null | Error> => {
	return await new Promise((resolve, reject) => {
		db.transaction((tx) => {
			items.forEach((item) => {
				tx.executeSql(
					`
                    INSERT OR REPLACE INTO store (
                        id,
                        title,
                        description,
                        pictureUrl,
                        price,
                        stock,
                        type,
                        categories
                    ) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
					[
						String(item.id),
						String(item.title),
						String(item.description),
						String(item.pictureUrl),
						Number(item.price),
						Number(item.stock),
						String(item.type),
						JSON.stringify(item.categories), // inserting an array violates 1st normal form but is simpler than creating a new table
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

export const fetchStore = async (props: ItemFetchParameters): Promise<DtItem[] | Error> => {
	return await new Promise((resolve, reject) => {
		db.transaction((tx) => {
			const params = [
				props.orderBy !== undefined ? props.orderBy : 'id',
				props.orderDirection !== undefined ? props.orderDirection : 'ASC',
				props.type !== undefined ? props.type : props.type,
			].filter((param) => param !== undefined) as string[];
			tx.executeSql(
				`SELECT * FROM store
                 ORDER BY (?)
                 ${props.type !== undefined ? 'WHERE type = (?)' : ''}
                `,
				params,
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
