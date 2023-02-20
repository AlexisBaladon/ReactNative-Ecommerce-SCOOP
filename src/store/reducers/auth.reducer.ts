import type { AuthState, AuthActions } from '../types';

const initialState: AuthState = {
	userId: null,
	userToken: null,
	email: null,
	error: null,
	loading: false,
};

const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
	const userId = action.userId !== undefined ? action.userId : state.userId;
	const userToken = action.userToken !== undefined ? action.userToken : state.userToken;
	const error = action.error !== undefined ? action.error : state.error;
	const email = action.email !== undefined ? action.email : state.email;

	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				userId,
				userToken,
				error,
				email,
				loading: false,
			};
		case 'REGISTER':
			return {
				...state,
				userId,
				userToken,
				error,
				email,
				loading: false,
			};
		case 'LOGOUT':
			return {
				...state,
				userId: null,
				userToken: null,
				email: null,
				error,
				loading: false,
			};
		case 'LOADING':
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};

export default authReducer;
