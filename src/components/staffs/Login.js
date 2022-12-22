import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { staffLogin } from '../../redux/slices/staffs/loginSlice';
import MessageAlert from './ErrorAlert';

export default function Login() {
    const { register, getValues, handleSubmit } = useForm();
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const showdata = () => { 
        const data = getValues();
        dispatch(staffLogin(data)).then(() => {
            navigate("/error");
          });
    };
    

    return (
        <>
        <form onSubmit={handleSubmit(showdata)}>
            <input {...register('email')} />
            <input {...register('password')} />
            <input type='submit' value='login' />
        </form>
        </>

    );
}
