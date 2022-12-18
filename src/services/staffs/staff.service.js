import axios from 'axios';
import staffAuthHeader from './auth-header';

const API_URL_LOGOUT = 'http://localhost:3000/auth/staffs/logout';

const logout = () => {
    return axios.get(API_URL_LOGOUT, { headers: staffAuthHeader() });
};

export default logout;