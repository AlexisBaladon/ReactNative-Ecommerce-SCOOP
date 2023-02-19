import type { AuthState, AuthActions } from '../types';

const initialState: AuthState = {
	userId: null,
	userToken: null,
	error: null,
	email: null,
};

const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
	const userId = action.userId !== undefined ? action.userId : null;
	const userToken = action.userToken !== undefined ? action.userToken : null;
	const error = action.error !== undefined ? action.error : null;
	const email = action.email !== undefined ? action.email : null;

	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				userId,
				userToken,
				error,
				email,
			};
		case 'REGISTER':
			return {
				...state,
				userId,
				userToken,
				error,
				email,
			};
		case 'LOGOUT':
			return {
				...state,
				userId: null,
				userToken: null,
				email: null,
				error,
			};
		default:
			return state;
	}
};

export default authReducer;
