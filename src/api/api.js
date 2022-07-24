import axiosClient from 'lib/axios';

const prefixUrl = 'auth';

const api = {
    /* Login */
    login: (username, password) => {
        return axiosClient.post(`${prefixUrl}/login`, {
            username: username,
            password: password,
        });
    },

    /* Refresh Token */
    refreshToken: () => {
        return axiosClient.post(`${prefixUrl}/refresh`, {});
    },

    /* Register */
    register: (email, password, userName) => {
        return axiosClient.post(`${prefixUrl}/signup`, {
            email: email,
            password: password,
            userName: userName,
        });
    },

    // Check Exist Account
    checkExistAccount: (email) => {
        return axiosClient.get(`/account/check-account-exist`, { params: { email: email } });
    },

    /* Update recruiter Profile */
    updateProfile: (request) => {
        return axiosClient.patch(`account/self`, request);
    },
};

export default api;
