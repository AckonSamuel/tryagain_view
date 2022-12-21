import axios from 'axios';

const API_URL = 'http://localhost:3000/auth/staffs/';

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

const login = (staff) => (
    axios.post(API_URL + 'login', {staff})
    .then((res) => {
        if (res.data.accessToken) {
            localStorage.setItem('staff', JSON.stringify(res.data))
        }
        console.log(res.data)
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