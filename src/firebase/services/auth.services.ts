import { LOGIN_URL, SIGNUP_URL } from '../env';
import type { User } from '../models/user';

export const login = async (email: string, password: string): Promise<User | Error | undefined> => {
	try {
		const response = await fetch(LOGIN_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password, returnSecureToken: true }),
		});
		const data = await response.json();
		if (data?.error !== undefined) {
			return new Error(data.error.message);
		}
		const userData = { userId: data.localId, token: data.idToken, email: data.email };
		return userData;
	} catch (error) {
		return error as Error;
	}
};

export const register = async (
	email: string,
	password: string,
	confirmPassword: string,
): Promise<User | Error | undefined> => {
	try {
		if (password !== confirmPassword) {
			return new Error('Passwords do not match');
		}
		const response = await fetch(SIGNUP_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password, returnSecureToken: true }),
		});
		const data = await response.json();
		if (data?.error !== undefined) {
			return new Error(data.error.message);
		}
		const userData = { userId: data.localId, token: data.idToken, email: data.email };
		return userData;
	} catch (error) {
		console.log(error as Error);
		return error as Error;
	}
};
