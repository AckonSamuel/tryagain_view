import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { staffSignUp } from '../../redux/slices/staffs/registerSlice';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        KNUST Clubs and Societies platform
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const formSchema = Yup.object({
  email: Yup.string().email(),
  password: Yup.string()
    .min(4, "Password length should be at least 4 characters")
    .max(12, "Password cannot exceed more than 12 characters"),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match"),
  phone_number: Yup.number()
  .required('Phone number is required')
  .min(10, 'Should contain at least 10 digits')
}).required();

const theme = createTheme();

export default function StaffRegister() {

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
        resolver: yupResolver(formSchema)
      });

      password = watch("password", "");

    const showdata = () => { 
        const data = getValues();
        console.log(data);
        dispatch(staffSignUp(data)).then(() => {
            navigate("/auth/staffs/login");
          });
    };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" variant="outlined" elevation={6} square>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 5,
            padding: 4,
          }}
        >
          <Box
        component="img"
        sx={{
          height: 120,
          width: 80,
          marginBottom: 2,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          marginRight: 4
        }}
        alt="The house from the offer."
        src="https://www.freelogovectors.net/wp-content/uploads/2022/03/knust_logo_freelogovectors.net_.png"
      />
          <Typography component="h1" variant="h5"
          sx={{
            marginBottom: 2,
          }}>
            Staff Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit(showdata)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                {...register('first_name')}
                required
                  autoComplete="given-name"
                  id='outlined-basic'
                  label="First Name"
                  variant='outlined'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                {...register('last_name')}
                required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                {...register('other_name')}
                  fullWidth
                  id="otherName"
                  label="Other names"
                  name="otherName"
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                {...register('email')}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <p>{ errors.email ? errors.email.message : ''}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                {...register('role')}
                  required
                  fullWidth
                  id="role"
                  label="Role"
                  name="role"
                  autoComplete="Role"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                {...register('phone_number')}
                  required
                  fullWidth
                  id="phone_number"
                  label="Phone number"
                  name="phone_number"
                  autoComplete="Phone number"
                />
                <p>{ errors.phone_number ? errors.phone_number.message : ''}</p>
              </Grid>
              <Grid item xs={12}>
              <FormControl sx={{ width: '100%',  }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            autoComplete="current-password"
            fullWidth
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
            sx={{ marginBottom: 1}}
            required
          />
          </FormControl>
            </Grid>
              <Grid item xs={12}>
              <FormControl sx={{ width: '100%' }} variant="outlined">
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
            required
          />
          <p>{ errors.password_confirmation ? errors.password_confirmation.message : ''}</p>
            </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: 'green' }}
              id='login-btn'
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/auth/staffs/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}