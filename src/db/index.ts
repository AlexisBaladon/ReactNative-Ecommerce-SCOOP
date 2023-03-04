import * as SQLite from 'expo-sqlite';
import {
	CREATE_STORE_TABLE,
	CREATE_FAVOURITES_TABLE,
	CREATE_CART_TABLE,
	CREATE_ORDERS_TABLE,
} from './tables';

const TABLES = [
	CREATE_STORE_TABLE,
	CREATE_FAVOURITES_TABLE,
	CREATE_CART_TABLE,
	CREATE_ORDERS_TABLE,
];

export const db = SQLite.openDatabase('scoop.db');

export const init = async (): Promise<null | Error> => {
	return await new Promise((resolve, reject) => {
		db.transaction((tx) => {
			TABLES.forEach((table) => {
				tx.executeSql(
					table,
					[],
					() => {
						resolve(null);
					},
					(_, error) => {
						console.log(error);
						reject(error);
						return true;
					},
				);
			});
		});
	});
};

export default db;
