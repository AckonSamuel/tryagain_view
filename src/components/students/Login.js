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
import { studentLogin } from '../../redux/slices/students/loginSlice';

const formSchema = Yup.object({
    password: Yup.string()
      .required("Password is required"),
    email: Yup.string()
     .required("Email is required"),
  }).required();

export default function Login() {
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
        dispatch(studentLogin(data)).then(() => {
            navigate("/error");
          });
    };
    

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
            <Button variant="contained" type='sumbit' sx={{ margin: '10px'}} >Login</Button>
        </form>
        </Box>

    );
}
