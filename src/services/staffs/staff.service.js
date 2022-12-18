import axios from 'axios';
import staffAuthHeader from './auth-header';

const API_URL_LOGOUT = 'http://localhost:3000/auth/staffs/logout';

const logout = () => {
    localStorage.removeItem('staff');
    return axios.delete(API_URL_LOGOUT, { headers: staffAuthHeader() });
};

export default logout;