import React from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/staffs/Login";
import Register from "./components/staffs/Register";
import logOut from "./redux/services/staffs/staff.service";
import "./App.css";

const App = () => {
    let dispatch = useDispatch();

    return (
        <>
        <nav>      
            <div className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/register">
                    Register
                </Link>
                <Link className="nav-link" to="/login">
                    Login
                </Link>
                <button className="btn" onClick={ () => {
                    dispatch(logOut);
                }}>Logout </button>
            </li>
        </div>
        </nav><div className="container mt-3">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path='/register' element={<Register />}/>
                    <Route path='/logout' element={<Login />} />
                </Routes>
            </div>
        </>
    )
};


export default App;