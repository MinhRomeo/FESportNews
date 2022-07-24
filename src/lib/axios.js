import axios from 'axios';
import { applyAuthTokenInterceptor, getAccessToken, IAuthTokens, TokenRefreshRequest } from 'axios-jwt';
import wait from 'utils/wait';
/* For RefreshToken Use axios-jwt */

const queryString = require('query-string');
const BASE_URL = process.env.REACT_APP_API_URL;

/**
 * Create Axios Instance
 */
const axiosClient = axios.create({
    baseURL: "http://localhost:8012/api",
    // withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*'
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

const requestRefresh = async (refreshToken) => {
    // const response = await axios.post(`${BASE_URL}/auth/refresh`, { refreshToken: refreshToken });

    /* Fake Refresh */
    wait(500);
    const accessToken = getAccessToken();

    const token = {
        accessToken: accessToken,
        refreshToken: accessToken,
    };

    return token;
};

applyAuthTokenInterceptor(axiosClient, { requestRefresh });

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) return response.data;

        return response;
    },
    (error) => {
        if (error.name.toLowerCase() === 'error') {
            // clearAuthTokens();
            //window.location.href = '/';
        }

        return Promise.reject(error.response.data);
    }
);

export default axiosClient;
