// @mui material components
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import { useForm } from "react-hook-form";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

import { resetPasswordEmail } from "redux/slices/clubs/resetPasswordEmail";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";

function EmailAuth() {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const { getValues, handleSubmit, register } = useForm();
  const [success, setSuccess] = useState(false);
  const loading = useSelector((state) => state.resetPasswordEmail.loading);
  const error = useSelector((state) => state.resetPasswordEmail.error);

  const handleSubmitted = () => {
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      setSubmitted(false);
      dispatch(resetPasswordEmail(getValues())).then((res) => {
        if (res.type === "club/resetPasswordEmail/fulfilled")
        setSuccess(true);
      });
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
            You will receive an e-mail in maximum 60 seconds
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit(handleSubmitted)}>
            <MDBox mb={4}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                disabled={loading}
                fullWidth
                {...register("email")}
              />
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton
                type="submit"
                variant="gradient"
                color="success"
                disabled={loading}
                fullWidth
              >
                reset
              </MDButton>
            </MDBox>
            {error && <MDTypography color="warning">Request unsuccessful</MDTypography>}
            {success && (
              <MDTypography color="success">
                Reset instructions have been successfully sent to your email
              </MDTypography>
            )}
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default EmailAuth;
