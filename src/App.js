import React, { useEffect, useCallback } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {logout} from './redux/actions/auth';
import "./App.css";

const App = () => {
    const { staff: currentStaff } = useSelector((state) => state.staff.staff);
    const dispatch = useDispatch();

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                {currentStaff ? (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={logOut}>
                                LogOut
                            </a>
                        </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                    </div>
                )
                }
            </nav>

            <div className="container mt-3">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </div>
    )
};


export default App;