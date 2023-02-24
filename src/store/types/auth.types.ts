export interface AuthState {
	userId: string | null;
	email: string | null;
	pictureUri: string | null;
	userToken: string | null;
	loading: boolean;
	error: Error | null;
}

export type AuthActionTypes = 'LOGIN' | 'REGISTER' | 'LOGOUT' | 'LOADING_AUTH' | 'SET_IMAGE';

export interface AuthActions {
	type: AuthActionTypes;
	userId?: string;
	userToken?: string;
	error?: Error;
	email?: string;
	pictureUri?: string;
}
