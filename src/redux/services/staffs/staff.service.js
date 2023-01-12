import axios from "axios";
import staffAuthHeader from "./auth-header";

const API_URL_LOGOUT = "http://localhost:3000/auth/staffs/logout";

const logOut = async () =>
  await axios.delete(API_URL_LOGOUT, { headers: staffAuthHeader() }).then((res) => {
    // window.location.reload
    localStorage.removeItem("staff");
    console.log(res.data.message);
    return res;
  });

export default logOut;
