import React, { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSnackbar } from 'notistack';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';
import { green } from '@mui/material/colors';
import { studentLogin } from '../../redux/slices/students/loginSlice';

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

let current_student = null;

const theme = createTheme();

const formSchema = Yup.object({
  password: Yup.string()
    .required("Password is required"),
  email: Yup.string()
    .required("Email is required"),
}).required();

export default function StudentLogin() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState('idle');
  const [success, setSuccess] = React.useState(false);
  const timerRef = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);


  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
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


  const buttonSx = {
    mt: 3, mb: 2, backgroundColor: 'green' ,
    height: '40px',
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
      
    }),
};

  const showdata = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }
    const data = getValues();
    dispatch(studentLogin(data)).then((res) => {
      console.log(res)
      if (res.type === "student/studentLogin/fulfilled") {
        setLoading(false);
        setQuery('progress');
        timerRef.current = window.setTimeout(
          () => {
            setQuery('success')
          }, 2000
        );
        current_student = 'student';
        enqueueSnackbar('Sign in successful', {variant: 'success'});
        setTimeout(function() {
          navigate('/feed');
        }, 3000);
      }
      if (res.type === 'student/studentLogin/rejected') {
        setLoading(false);
        enqueueSnackbar('Sign in Unsuccessful', {variant: 'error'});
      }
    });
  };



  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://user-images.githubusercontent.com/92922987/209251235-962d91f6-12eb-4341-9e71-eaf504965806.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundClip: 'padding-box'
          }}
        />
        <Grid item xs={12} sm={8} md={5} maxWidth="xs" elevation={6} square component={Paper}>
            <Box
              sx={{
                marginTop: 7,
                marginLeft: 11,
                padding: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: 5,
                width: '70%',
                height: '80%',
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
                  marginRight: 2
                }}
                alt="The house from the offer."
                src="https://www.freelogovectors.net/wp-content/uploads/2022/03/knust_logo_freelogovectors.net_.png"
              />
              <Typography component="h1" variant="h5"
                sx={{
                  marginBottom: 2,
                  marginRight: 4
                }}>
                Student Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit(showdata)} sx={{ mt: 1 }}>
                <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                  <TextField
                    {...register('email')}
                    id='outlined-basic'
                    label='email'
                    variant='outlined'
                    autoComplete="email"
                    autoFocus
                    required
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: '100%', }} variant="outlined" >
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
                    sx={{ marginBottom: 1 }}
                    required
                  />
                </FormControl>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  id='login-btn'
                  sx={buttonSx}
          disabled={loading}
                >
                {
                  query === 'idle' ?
                  <Typography>Sign in</Typography> :
                   query === 'success' ? 
                   (<Typography>Student Authenticated!</Typography>
                   ) : (
                    <Fade 
                    in={query === 'progress'}
                    style={{
                      transitionDelay: query === 'progress' ? '800ms' : '0ms',
                    }}
                    unmountOnExit>
                      <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
                    </Fade>
                   ) 
                }
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/auth/students/register" variant="body2">
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>

                </Grid>

              </Box>

            </Box>
            <Copyright sx={{ mt: 7 }} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export { current_student };