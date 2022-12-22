import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { staffSignUp } from '../../redux/slices/staffs/registerSlice';

export default function Register() {
    const { register, getValues, handleSubmit } = useForm();
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const showdata = () => { 
        const data = getValues();
        console.log(data);
        // dispatch(staffSignUp(data)).then(() => {
        //     navigate("/error");
        //   });
    };
    
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (e) =>  {
        e.preventDefault();
    };

    return (
        <Box
        sx={{ display: 'flex', flexWrap: 'wrap' }}
        notValidate
        autoComplete='off'>
        <form onSubmit={handleSubmit(showdata)}>
            {/* <input {...register('email')} />
            <input {...register('password')} />
            <input  />
            <input type='submit' value='login' /> */}
            <TextField {...register('email')}  id='outlined-basic' label='email' variant='outlined' />
            <TextField {...register('password')}  id='outlined-basic' label='Password' variant='outlined' />
            <TextField {...register('password_confirmation')}  id='outlined-basic' label='Confirm Password' variant='outlined' />
            <TextField {...register('role')}  id='outlined-basic' label='role' variant='outlined' />
            <TextField {...register('name')}  id='outlined-basic' label='name' variant='outlined' />
            <TextField {...register('phone_number')}  id='outlined-basic' label='Phone number' variant='outlined' />
            <Button variant="contained" type='sumbit' >Register</Button>
        </form>
        </Box>
    );
};