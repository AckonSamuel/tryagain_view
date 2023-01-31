// @mui material components
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Card from "@mui/material/Card";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

import { postPasswordReset } from "redux/slices/clubs/postPasswordReset";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";

const formSchema = Yup.object({
    email: Yup.string().email(),
    password: Yup.string(),
    password_confirmation: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
  }).required({
    resolver: yupResolver(formSchema),
  });

function PasswordResetForm() {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const { getValues, handleSubmit, register } = useForm();

  const handleSubmitted = () => {
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      setSubmitted(false);
      dispatch(postPasswordReset(getValues()));
      console.log(getValues());
    }
  }, [submitted]);

  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="success"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Fill the fields with your new password
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit(handleSubmitted)}>
          <MDBox mb={2}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    id="standard-adornment-password"
                    autoComplete="current-password"
                    fullWidth
                    disabled={loading}
                    type={showPassword ? "text" : "password"}
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
                    {...register("password", { required: true })}
                  />
                </FormControl>
              </MDBox>
              <MDBox mb={2}>
                <FormControl sx={{ width: "100%" }} variant="standard">
                  <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                  <Input
                    id="out-basic"
                    disabled={loading}
                    type={showPassword ? "text" : "password"}
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
                    {...register("password_confirmation")}
                    required
                  />
                  <p sx={{ color: "red", fontSize: "0.5em" }}>
                    {errors.password_confirmation ? errors.password_confirmation.message : ""}
                  </p>
                </FormControl>
              </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton type="submit" variant="gradient" color="success" fullWidth>
                reset
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default PasswordResetForm;
