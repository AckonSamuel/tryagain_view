import axios from "axios";
import staffAuthHeader from "./auth-header";

const API_URL_LOGOUT = "http://localhost:3000/auth/staffs/logout";

const logOut = async () => {
  try {
    const response = await axios.post(API_URL_LOGOUT, null, {
      headers: staffAuthHeader(),
    });
    localStorage.removeItem("staff");
    return response;
  } catch (error) {
    return error;
  }
};

export default logOut;
