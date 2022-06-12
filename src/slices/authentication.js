import { createSlice } from '@reduxjs/toolkit';
import authApi from 'api/api';
import { clearAuthTokens, setAuthTokens } from 'axios-jwt';

import { configAppInit } from 'utils/config';

const initialState = {
    isInitialized: false,
    isAuthenticated: false,
    isLoaded: false,
    isError: false,
    message: '',
    user: null,
};

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        /**
         * Set Error
         * @param state
         * @param action
         */
        setError: (state, action) => {
            state.isError = true;
            state.message = action.payload.message;
        },
        // reset error
        resetError: (state) => {
            state.isError = false;
            state.message = '';
        },
        /* Set Authenticated */
        setLoaded: (state, action) => {
            state.isLoaded = action.payload;
        },

        /* Login */
        login: (state, action) => {
            const data = action.payload;
            setAuthTokens({
                accessToken: data.token.access_token,
                refreshToken: data.token.refresh_token,
            });
            state.isAuthenticated = true;
            state.user = data.user;
        },

        /* Logout */
        logout: (state) => {
            state.isAuthenticated = false;
            state.isLoaded = false;
            state.user = null;
            configAppInit.remove();
            clearAuthTokens();
            localStorage.clear();
            window.location.href = '/';
        },
        clearSession: (state) => {
            state.isAuthenticated = false;
            state.isLoaded = false;
            state.user = null;
            configAppInit.remove();
            clearAuthTokens();
            localStorage.clear();
        },

        update: (state, action) => {
            const user = action.payload;

            state.user = user;
        },

        /* Register */
        register: (state) => {},

        /* Recovery Password with enter Email */
        recovery: (state) => {},
    },
});

/**
 * Login
 * @param email
 * @param password
 * @returns
 */
export const login = (email, password) => async (dispatch) => {
    try {
        const response = await authApi.login(email, password);

        dispatch(slice.actions.login(response));
    } catch (error) {
        dispatch(slice.actions.setError(error));
    }
};
export const register = (email, password, nickname) => async (dispatch) => {
    const response = await authApi.register(email, password, nickname);
    return response;
};

export const updateProfile = (request) => async (dispatch) => {
    const response = await authApi.updateProfile(request);
    dispatch(slice.actions.update(response));
};

export const checkAccount = (email) => async (dispatch) => {
    const response = await authApi.checkExistAccount(email);
    return response;
};

export const { reducer } = slice;
export default slice;
