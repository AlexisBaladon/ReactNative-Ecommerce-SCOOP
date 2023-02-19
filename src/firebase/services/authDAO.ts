import { LOGIN_URL, SIGNUP_URL } from "../env";

interface UserData {
    userId: string;
    token: string;
}

export const login = async (email: string, password: string): Promise<UserData | Error | undefined> => {
    try {
        const response = await fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, returnSecureToken: true }),
        });
        const data = await response.json();
        const userData = {userId: data.localId, token: data.idToken }
        return userData;
    }
    catch (error) {
        console.log(error as Error);
        return error as Error;
    }
}

export const register = async (email: string, password: string, confirmPassword: string): Promise<UserData | Error | undefined> => {
    try {
        if (password !== confirmPassword) {
            return new Error('Passwords do not match');
        }
        const response = await fetch(SIGNUP_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, returnSecureToken: true}),
        });
        const data = await response.json();
        const userData = {userId: data.localId, token: data.idToken }
        return userData;
    }
    catch (error) {
        console.log(error as Error);
        return error as Error;
    }
}