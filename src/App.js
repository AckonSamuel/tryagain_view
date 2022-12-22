import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/staffs/Login";
import MessageAlert from "./components/staffs/ErrorAlert";
import logOut from "./redux/services/staffs/staff.service";
import "./App.css";

const App = () => {
    let dispatch = useDispatch();

    return (
        <>
        <nav>      
            <div className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/error">
                    Message
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
                    <Route path='/error' element={<MessageAlert />}/>
                    <Route path='/logout' element={<Login />} />
                </Routes>
            </div>
        </>
    )
};


export default App;