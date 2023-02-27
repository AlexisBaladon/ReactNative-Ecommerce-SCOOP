import { LOGIN_URL, SIGNUP_URL, API_URL } from '../env';
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

		const userId: string = data?.localId !== undefined ? data.localId : '';
		const userData = { userId, token: data.idToken, email: data.email }
		
		const userImage = await fetch(`${API_URL}/users/${userId}.json`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		const pictureUri = (await userImage.json()).imageUri;
		Object.assign(userData, { ...userData, pictureUri });
		
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
			return new Error('PASSWORDS_DO_NOT_MATCH');
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

export const updateImage = async (userId: User['userId'], imageUri: string): Promise<Error | undefined | any> => {
	try {
		const response = await fetch(`${API_URL}/users/${userId}.json`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ imageUri }),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error as Error);
		return error as Error;
	}
}