// react-router-dom components
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import { clubSignUp } from "redux/slices/clubs/registerSlice";

// const formSchema = Yup.object({
//   email: Yup.string().email(),
//   password: Yup.string()
//     .min(4, "Password length should be at least 4 characters")
//     .max(12, "Password cannot exceed more than 12 characters"),
//   password_confirmation: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match"),
//   phone_number: Yup.number()
//     .required("Phone number is required")
//     .min(10, "Should contain at least 10 digits"),
// }).required();

function Cover() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  // let password;
  const {
    register,
    handleSubmit,
    // formState: { errors },
    // watch,
    getValues,
  } = useForm();

  // password = watch("password", "");

  const showdata = () => {
    const data = getValues();
    dispatch(clubSignUp(data)).then((res) => {
      if (res.type === "club/clubSignUP/fulfilled") {
        navigate("/authentication/sign-in");
      }
    });
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="success"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Fill the fields to get started
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit(showdata)}>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                variant="standard"
                fullWidth
                {...register("club_name", { required: true })}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                {...register("email", { required: true })}
              />
            </MDBox>
            <MDBox mb={2}>
              <FormControl sx={{ width: "100%" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                  id="standard-adornment-password"
                  autoComplete="current-password"
                  fullWidth
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
              </FormControl>
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="integer"
                label="Telephone number"
                variant="standard"
                fullWidth
                {...register("telephone_number", { required: true })}
              />
            </MDBox>
            <MDBox mb={2}>
              <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="group">Group</InputLabel>
                <Select {...register("group")} required id="group" label="group" variant="standard">
                  <MenuItem value="Religious">Religious</MenuItem>
                  <MenuItem value="Alumni">Alumni</MenuItem>
                  <MenuItem value="Ethnic">Ethnic</MenuItem>
                  <MenuItem value="Professional">Professional</MenuItem>
                  <MenuItem value="College">College</MenuItem>
                  <MenuItem value="Faculty">Faculty</MenuItem>
                  <MenuItem value="Department">Department</MenuItem>
                  <MenuItem value="Entertainment">Entertainment</MenuItem>
                  <MenuItem value="Sports">Sports</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="success"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="success" type="submit" fullWidth>
                sign Up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="#"
                  variant="button"
                  color="success"
                  fontWeight="medium"
                  textGradient
                >
                  Sign in
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
