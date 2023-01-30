import React from "react";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDTypography from "components/MDTypography";

function ConfirmationEmail() {
  return (
    <DashboardLayout>
      <MDBox display="flex" justifyContent="center" alignItems="center">
        <MDTypography variant="h6" color="dark" fontSize="0.5em">
          Confirmation instruction have to sent to your email for verification. Please check your
          inbox.
        </MDTypography>
        <MDTypography variant="h6" color="warning" frontSize="0.5em">
          You have to confirm your email before you can sign in.
        </MDTypography>
      </MDBox>
    </DashboardLayout>
  );
}

export default ConfirmationEmail;
