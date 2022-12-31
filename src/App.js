import React from "react";
import { useDispatch } from "react-redux";
import { Routes, Route} from "react-router-dom";
import StaffLogin from "./components/staffs/StaffLogin";
import StaffRegister from "./components/staffs/StaffRegister";
import StudentLogin from './components/students/StudentLogin';
import StudentRegister from './components/students/StudentRegister';
import ClubLogin from './components/clubs/ClubLogin';
import ClubRegister from './components/clubs/ClubRegister';
import ClubDetails from "./components/clubs/ClubDetails";
import logOut from "./redux/services/staffs/staff.service";
import SplashScreen from './components/SplashScreen';
import Homepage from "./components/Homepage";
import "./App.css";

const App = () => {
    let dispatch = useDispatch();

    return (
        <>
<div className="container mt-3">
                <Routes>
                    <Route path="/" element={<SplashScreen />} />
                    <Route path='auth/staffs/login' element={<StaffLogin />} />
                    <Route path='auth/students/login' element={<StudentLogin />} />
                    <Route path='auth/clubs/login' element={<ClubLogin />} />
                    <Route path='/auth/clubs/register' element={<ClubRegister />} />
                    <Route path='/auth/staffs/register' element={<StaffRegister />} />
                    <Route path='/auth/students/register' element={<StudentRegister />} />
                    <Route path='/feed' element={<Homepage />} />
                    <Route path='/clubdetails' element={<ClubDetails />} />
                </Routes>
            </div>
        </>
    )
};


export default App;