import { API_URL } from '../env';
import type { DtItem } from '../../interfaces';
import type { User } from '../models/user';

export const addItemFavourites = async (
	userId: User['userId'],
	item: DtItem,
): Promise<Error | any> => {
	const { id, ...itemWihoutId } = item;
	try {
		const response = await fetch(`${API_URL}/users/${userId}/favourites/${item.id}.json`, {
			method: 'PUT', // Put prevents firebase from generating an extra id
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(itemWihoutId),
		});
		const data = await response.json();
		if (!response.ok) {
			return new Error('Something went wrong');
		}
		return data;
	} catch (error) {
		return error;
	}
};

export const removeItemFavourites = async (
	userId: User['userId'],
	itemId: DtItem['id'],
): Promise<Error | any> => {
	try {
		const response = await fetch(`${API_URL}/users/${userId}/favourites/${itemId}.json`, {
			method: 'DELETE',
		});
		const data = await response.json();
		if (!response.ok) {
			return new Error('Something went wrong');
		}
		return data;
	} catch (error) {
		return error;
	}
};

export const removeAllItemsFavourites = async (userId: User['userId']): Promise<Error | any> => {
	try {
		const response = await fetch(`${API_URL}/users/${userId}/favourites.json`, {
			method: 'DELETE',
		});
		const data = await response.json();
		if (!response.ok) {
			return new Error('Something went wrong');
		}
		return data;
	} catch (error) {
		return error;
	}
};

export const getAllItemsFavourites = async (userId: User['userId']): Promise<Error | any> => {
	try {
		const response = await fetch(`${API_URL}/users/${userId}/favourites.json`);
		const data = await response.json();
		if (data === null) return [];
		const parsedData = Object.keys(data).map((key) => ({ ...data[key], id: key }));
		if (!response.ok) {
			return new Error('Something went wrong');
		}
		return parsedData;
	} catch (error) {
		return error;
	}
};
