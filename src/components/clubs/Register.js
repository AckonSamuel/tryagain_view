import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
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
import { clubSignUp } from '../../redux/slices/clubs/registerSlice';


const formSchema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    password_confirmation: Yup.string()
      .required("Confirm Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
    email: Yup.string()
     .required("Email is required"),
    club_name: Yup.string()
    .required('Name is required'),
    group: Yup.string()
    .required('Group is required, e.g. Religious, Sports'),
    telephone_number: Yup.number()
    .required('Phone number is required')
    .min(10, 'Should contain at least 10 digits')
    .max(15, 'Cannot exceed 15 digits')
  }).required();

export default function Register() {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (e) =>  {
        e.preventDefault();
    };

    let password;
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        getValues
      } = useForm({
        mode: "onTouched",
        resolver: yupResolver(formSchema)
      });

      password = watch("password", "");

    const showdata = () => { 
        const data = getValues();
        console.log(data);
        dispatch(clubSignUp(data)).then(() => {
            navigate("/error");
          });
    };
    
    console.log(errors);

    return (
        <Box
        sx={{ display: 'flex', flexWrap: 'wrap' }}
        autoComplete='off'>
        <form onSubmit={handleSubmit(showdata)}>
            <TextField {...register('email')}  id='outlined-basic' label='email' variant='outlined' />
            <p>{ errors.email ? errors.email.message : ''}</p>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
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
          <p>{ errors.password ? errors.password.message : ''}</p>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-basic"
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
            label="Confirm Password"
            {...register('password_confirmation')}
          />
          <p>{ errors.password_confirmation ? errors.password_confirmation.message : ''}</p>
            </FormControl>
            <TextField {...register('group')}  id='outlined-basic' label='group' variant='outlined' />
            <p>{ errors.group ? errors.group.message : ''}</p>
            <TextField {...register('club_name')}  id='outlined-basic' label='name' variant='outlined' />
            <p>{ errors.club_name ? errors.club_name.message : ''}</p>
            <TextField {...register('phone_number')}  id='outlined-basic' label='Phone number' variant='outlined' />
            <p>{ errors.phone_number ? errors.phone_number.message : ''}</p>
            <Button variant="contained" type='sumbit' sx={{ margin: '10px'}} >Register</Button>
        </form>
        </Box>
    );
};
