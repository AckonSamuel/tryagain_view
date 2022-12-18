import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
} from './../actions/types';

const staff = JSON.parse(localStorage.getItem('user'));

const initialState = staff ? { isLoggedIn: true, staff } : { isLoggedIn: false, staff: null };

const authReducer = (state = initialState, action ) => {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS,
                REGISTER_FAIL,
                LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                staff: payload.staff,
            };
        case LOGOUT_FAILURE:
            return state;
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                staff: null,
            };
        default:
            return state;
    }
}

export default authReducer;