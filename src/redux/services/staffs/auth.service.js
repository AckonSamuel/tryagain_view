import axios from 'axios';

const API_URL = 'https://localhost:3000/auth/staffs/';

const register = (staff_name, email, phone_number, password, role, password_confirmation) => (
    axios.post(API_URL + "signup", {
        staff_name,
        email,
        password,
        password_confirmation,
        role,
        phone_number
    })
);

const login = ( email, password ) => (
    axios.post(API_URL + 'login', {
        email,
        password
    })
    .then((res) => {
        if (res.data.accessToken) {
            localStorage.setItem('staff', JSON.stringify(res.data))
        }

        return res.data;
    })
)

// const logout = () =>  {
//     axios.delete(API_URL + 'logout')
//     localStorage.removeItem('staff');
// };

const authService = {
    register,
    login,
};

export default authService;