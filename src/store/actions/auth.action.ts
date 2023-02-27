import type { AuthActions } from '../types/';
import { login as _login, register as _register, updateImage } from '../../firebase/services/auth.services';
import { takePicture } from '../../helpers/fileSystem';
import { addItemsCart } from '../../firebase/services/cart.services';
import { addItemsFavourites } from '../../firebase/services/favourites.services';
import type { DtItem, DtItemCart } from '../../interfaces';

export const login = (email: string, password: string) => {
	return async (dispatch: (action: AuthActions) => void) => {
		dispatch({ type: 'LOADING_AUTH' });
		try {
			const data = await _login(email, password);
			if (data === undefined) {
				dispatch({ type: 'LOGIN', error: new Error('Something went wrong') });
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'LOGIN', error: data });
				return;
			}
			dispatch({ type: 'LOGIN', userId: data.userId, email, userToken: data.token, pictureUri: data.pictureUri });
		} catch (error) {
			dispatch({ type: 'LOGIN', error: error as Error });
		}
	};
};

export const register = (
	email: string, 
	password: string, 
	confirmPassword: string,
	favouriteItems: DtItem[],
	cartItems: DtItemCart[],
) => {
	return async (dispatch: (action: AuthActions) => void) => {
		dispatch({ type: 'LOADING_AUTH' });
		try {
			const data = await _register(email, password, confirmPassword);
			if (data === undefined) {
				dispatch({ type: 'REGISTER', error: new Error('Something went wrong') });
				return;
			}
			if (data instanceof Error) {
				dispatch({ type: 'REGISTER', error: data });
				return;
			}

			await addItemsFavourites(data.userId, favouriteItems);
			await addItemsCart(data.userId, cartItems);
			dispatch({ type: 'REGISTER', userId: data.userId, email, userToken: data.token });
		} catch (error) {
			dispatch({ type: 'REGISTER', error: error as Error });
		}
	};
};

export const logout = () => {
	return async (dispatch: (action: AuthActions) => void) => {	
		dispatch({ type: 'LOGOUT' });
	}
};

export const loadPicture = (userId: string | null) => {
	return async (dispatch: (action: AuthActions) => void) => {
		const imageUri = await takePicture();
		if (imageUri === null || imageUri === undefined || imageUri instanceof Error) {
			dispatch({ type: 'SET_IMAGE', error: imageUri ?? new Error('Something went wrong while loading picture') });
			return;
		}
		dispatch({ type: 'SET_IMAGE', pictureUri: imageUri });
		
		if (userId === null || userId === undefined) return;

		const response = await updateImage(userId, imageUri);
		if (response instanceof Error) {
			dispatch({ type: 'SET_IMAGE', error: response });
		}
	}
}