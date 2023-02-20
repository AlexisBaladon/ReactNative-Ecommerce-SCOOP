import type { AuthActions } from '../types/';
import { login as _login, register as _register } from '../../firebase/services/auth.services';

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
			dispatch({ type: 'LOGIN', userId: data.userId, userToken: data.token });
		} catch (error) {
			dispatch({ type: 'LOGIN', error: error as Error });
		}
	};
};

export const register = (email: string, password: string, confirmPassword: string) => {
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
			dispatch({ type: 'REGISTER', userId: data.userId, userToken: data.token });
		} catch (error) {
			dispatch({ type: 'REGISTER', error: error as Error });
		}
	};
};

export const logout = () => {
	return async (dispatch: (action: AuthActions) => void) => {
		dispatch({ type: 'LOGOUT' });
	};
};
