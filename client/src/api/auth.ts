import axios from "axios";
import { getToken } from "../utils/getToken";
import { User } from '../types/userType';

const API_URL:string = `http://localhost:5000/api/auth`;
console.log('API_URL:', API_URL);

interface LoginRegisterResponse {
    user: User,
    message: string,
    token: string,
}

interface getUserResponse {
    user: User,
    message: string,
  }

/**
 * Authenticates a user with the provided email and password.
 * @param email - The user's email address.
 * @param password - The user's password.
 * @returns A Promise that resolves to an object with user, JWT and success message string if the registration is successful, or null if there's an error.
 */
export const login = async (email: string, password: string): Promise<LoginRegisterResponse | null> => {
    try {
        const res = await axios.post(`${API_URL}/login`, {
            email,
            password
        }, {
            withCredentials: true
        });

        localStorage.setItem('jwtToken', res.data.token);
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

/**
 * Registers a new user with the provided information.
 * @param email - The user's email address.
 * @param password - The user's password.
 * @param confirmPassword - The user's password confirmation.
 * @param firstname - The user's first name.
 * @param lastname - The user's last name.
 * @returns A Promise that resolves to an object with user, JWT and success message string if the registration is successful, or null if there's an error.
 */
export const register = async (
    email: string, 
    password: string, 
    confirmPassword: string, 
    firstname: string, 
    lastname: string,
    ): Promise< LoginRegisterResponse | null> => {
    try {
        const res = await axios.post(`${API_URL}/register`, {
            email, 
            password, 
            confirmPassword, 
            firstname, 
            lastname
        }, {
            withCredentials: true
        });
        localStorage.setItem('jwtToken', res.data.token);
        return (res.data);
    } catch (err) {
        console.error(err);
        return null;
    }
}

/**
 * Get current logged in user informations.
 * @headers Authorization: `Bearer ${getToken()}` - The user JWT.
 * @returns A Promise that resolves to the user informations in json format if the user has a JWT, or null if there's an error.
 */
export const getUser = async (): Promise< User | null> => {
    try {
        const res = await axios.get(`${API_URL}/getUser`, {
            headers: { Authorization: `Bearer ${getToken()}` },
            withCredentials: true,
        });
        return (res.data.user);
    } catch (err) {
        console.error(err);
        return null;
    }
}