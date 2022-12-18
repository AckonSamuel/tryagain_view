import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_FAILURE,
    LOGOUT_SUCCESS,
    SET_MESSAGE,
} from './types';

import authService from '../services/staffs/auth.service';
import logout from '../services/staffs/staff.service';

const register = ( staff_name, email, phone_number, password, role, password_confirmation ) => (dispatch) => {
    return authService.register(staff_name, email, phone_number, password, role, password_confirmation).then(
        (response) => {
            dispatch({
                type: REGISTER_SUCCESS,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response,
            });

            return Promise.resolve();
        },
        (error) => {
            const message = error.response || error.message || error.toString();

            dispatch({
                type: REGISTER_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

const login = (password, email) => (dispatch) => {
    return authService.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { staff: data },
            });
        
            return Promise.resolve();
        }, (error) => {
            const message = error.response || error.message || error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );

};

const logout = () => (dispatch) => {
    return logout().then(
        (data) => {
            dispatch({
                type: LOGOUT_SUCCESS,
                payload: data,
            });

            return Promise.resolve();
        }, (error) => {
            const message = error.response || error.message || error.toString();

            dispatch({
                type: LOGOUT_FAILURE,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    )
}

export {
    register,
    login,
    logout,
};
