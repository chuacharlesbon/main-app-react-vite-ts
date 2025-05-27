import type { AxiosError, AxiosInstance } from "axios";
import axios from "axios";
import { navigateTo } from "./navigateService";
import type { LoginBody, UserResponse } from "../interfaces/user";

const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,   // Vite
    // baseURL: process.env.REACT_APP_API_URL // CRA
    timeout: 10_000,
    withCredentials: true, // send cookies if you need them
});

api.interceptors.response.use(
    (res) => res,
    (err: AxiosError) => {
        // global error handling
        if (err.response === undefined) {
            // e.g. redirect to login
            navigateTo('/logout');
        }
        return Promise.reject(err);
    }
);

export const login = async (body: LoginBody): Promise<string> => {
    try {
        await api.post(
            '/api/user/login',
            {
                email: body.email,
                password: body.password
            }
        );
        return "Logged in successfully.";
    } catch (e) {
        return `Log in failed. ${e}`;
    }
};

export const logout = async (): Promise<string> => {
    try {
        await api.post('/api/user/logout');
        return "Logged out successfully.";
    } catch (e) {
        return `Log out failed. ${e}`;
    }
};

export const getProfile = async (): Promise<UserResponse> => {
    try {
        const { data } = await api.get<UserResponse>('/api/user/profile');
        return data;
    } catch (e) {
        const emptyuser: UserResponse = {};
        return emptyuser;
    }
};