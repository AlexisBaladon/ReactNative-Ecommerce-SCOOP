export interface AuthState {
	userId: string | null;
	email: string | null;
	userToken: string | null;
	loading: boolean;
	error: Error | null;
}

export type AuthActionTypes = 'LOGIN' | 'REGISTER' | 'LOGOUT' | 'LOADING';

export interface AuthActions {
	type: AuthActionTypes;
	userId?: string;
	userToken?: string;
	error?: Error;
	email?: string;
}
