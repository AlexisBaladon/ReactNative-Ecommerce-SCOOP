import { API_URL } from '../env';
import type { DtItem, DtItemCart } from '../../interfaces';
import type { User } from '../models/user';

export const addItemCart = async (
	userId: User['userId'],
	item: DtItemCart,
): Promise<Error | undefined | any> => {
	try {
		const { id, ...itemeWithoutId } = item;
		const response = await fetch(`${API_URL}/users/${userId}/cart/${id}.json`, {
			method: 'PUT', // Put prevents firebase from generating an extra id
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(itemeWithoutId),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error as Error);
		return error as Error;
	}
};

export const updateItemCart = async (
	userId: User['userId'],
	itemId: DtItem['id'],
	itemCount: DtItemCart['amount'],
): Promise<Error | undefined | any> => {
	try {
		console.log('updateItemCart', userId, itemId, itemCount);
		const response = await fetch(`${API_URL}/users/${userId}/cart/${itemId}.json`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ amount: itemCount }),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error as Error);
		return error as Error;
	}
};

export const removeItemCart = async (
	userId: User['userId'],
	itemId: DtItem['id'],
): Promise<Error | undefined | any> => {
	try {
		const response = await fetch(`${API_URL}/users/${userId}/cart/${itemId}.json`, {
			method: 'DELETE',
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error as Error);
		return error as Error;
	}
};

export const getItemsCart = async (
	userId: User['userId'],
): Promise<DtItemCart[] | Error | undefined> => {
	try {
		const response = await fetch(`${API_URL}/users/${userId}/cart.json`);
		const data = await response.json();
		const parsedData = Object.keys(data).map((key) => ({ ...data[key], id: key }));
		return parsedData;
	} catch (error) {
		console.log(error as Error);
		return error as Error;
	}
};

export const removeAllCart = async (userId: User['userId']): Promise<Error | undefined | any> => {
	try {
		const response = await fetch(`${API_URL}/users/${userId}/cart.json`, {
			method: 'DELETE',
		});
		const data = await response.json();
		const parsedData = Object.keys(data).map((key) => ({ ...data[key], id: key }));
		return parsedData;
	} catch (error) {
		console.log(error as Error);
		return error as Error;
	}
};
