import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function ConfirmationEmail() {
  return (
    <MDBox
      display="flex"
      flexDirection="column"
      sx={{ margin: "1em" }}
      justifyContent="center"
      alignItems="center"
    >
      <MDTypography variant="h6" color="dark" fontSize="0.8em">
        Confirmation instructions have been to sent to your email for verification. Please check your
        inbox.
      </MDTypography>
      <MDTypography variant="h6" color="warning" frontSize="0.9em">
        You have to confirm your email before you can sign in.
      </MDTypography>
    </MDBox>
  );
}

export default ConfirmationEmail;
