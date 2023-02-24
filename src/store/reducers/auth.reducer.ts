import type { AuthState, AuthActions } from '../types';

const initialState: AuthState = {
	userId: null,
	userToken: null,
	email: null,
	pictureUri: null,
	error: null,
	loading: false,
};

const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
	const userId = action.userId !== undefined ? action.userId : state.userId;
	const userToken = action.userToken !== undefined ? action.userToken : state.userToken;
	const error = action.error !== undefined ? action.error : state.error;
	const email = action.email !== undefined ? action.email : state.email;
	const pictureUri = action.pictureUri !== undefined ? action.pictureUri : state.pictureUri;
	

	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				userId,
				userToken,
				pictureUri,
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
				pictureUri: null,
				error,
				loading: false,
			};
		case 'LOADING_AUTH':
			return {
				...state,
				loading: true,
			};
		case 'SET_IMAGE':
			return {
				...state,
				pictureUri,
				loading: false,
			};
		default:
			return state;
	}
};

export default authReducer;
