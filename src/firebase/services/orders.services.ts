import type { Order } from '../models/orders';
import { API_URL } from '../env';

export const createOrder = async (order: Order, userId: string): Promise<Error | string | any> => {
	try {
		const response = await fetch(`${API_URL}/users/${userId}/orders.json`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(order),
		});
		const data = await response.json();
		if (!response.ok) {
			return new Error('Something went wrong');
		}
		return data.name;
	} catch (error) {
		return error;
	}
};

export const getAllOrders = async (userId: string): Promise<Error | any> => {
	try {
		const response = await fetch(`${API_URL}/users/${userId}/orders.json`);
		const data = await response.json();
		if (!response.ok) {
			return new Error('Something went wrong');
		}
		return data;
	} catch (error) {
		return error;
	}
};
