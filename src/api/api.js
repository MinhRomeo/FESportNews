import axiosClient from 'lib/axios';

const prefixUrl = 'auth';

const api = {
    /* Login */
    login: (email, password) => {
        return axiosClient.post(`${prefixUrl}/login`, {
            email: email,
            password: password,
        });
    },

    /* Refresh Token */
    refreshToken: () => {
        return axiosClient.post(`${prefixUrl}/refresh`, {});
    },

    /* Register */
    register: (email, password, nickname) => {
        return axiosClient.post(`${prefixUrl}/register`, {
            email: email,
            password: password,
            userName: nickname,
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
