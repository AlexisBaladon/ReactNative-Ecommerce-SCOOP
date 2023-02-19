export interface AuthState {
	userId: string | null;
    userToken: string | null;
    error: Error | null;
    email: string | null;
}

export type AuthActionTypes =
	| 'LOGIN'
	| 'REGISTER'
	| 'LOGOUT';

export interface AuthActions {
	type: AuthActionTypes;
    userId?: string;
    userToken?: string;
    error?: Error;
    email?: string;
}
