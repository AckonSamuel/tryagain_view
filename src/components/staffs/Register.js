import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
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
        sx={{ display: 'flex', flexWrap: 'wrap', margin: '200px'}}
        notValidate
        autoComplete='off'>
        <form onSubmit={handleSubmit(showdata)}>
            <TextField {...register('email')}  id='outlined-basic' label='email' variant='outlined' sx={{ margin: '10px'}}/>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            {...register('password')}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            {...register('password_confirmation')}
          />
        </FormControl>
            {/* <TextField {...register('password_confirmation')}  id='outlined-basic' label='Confirm Password' variant='outlined' sx={{ margin: '10px'}} /> */}
            <TextField {...register('role')}  id='outlined-basic' label='role' variant='outlined' sx={{ margin: '10px'}} />
            <TextField {...register('name')}  id='outlined-basic' label='name' variant='outlined' sx={{ margin: '10px'}} />
            <TextField {...register('phone_number')}  id='outlined-basic' label='Phone number' variant='outlined' sx={{ margin: '10px'}} />
            <Button variant="contained" type='sumbit' sx={{ margin: '10px'}} >Register</Button>
        </form>
        </Box>
    );
};