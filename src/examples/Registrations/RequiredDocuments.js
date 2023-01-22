// @mui material components
import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data

function RequiredDocuments() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="success"
                borderRadius="lg"
                coloredShadow="success"
              >
                <MDTypography variant="h6" color="white">
                  Upload Required Documents
                </MDTypography>
              </MDBox>
              <MDBox py={3} px={3} pt={3} pb={3}>
                <MDBox sx={{ marginBottom: "1em" }}>
                  <Paper elevation={6} sx={{ padding: "1em" }}>
                    <MDTypography variant="h6">Application letter for registration</MDTypography>
                    <Input type="file" />
                  </Paper>
                </MDBox>
                <MDBox sx={{ marginBottom: "1em" }}>
                  <Paper elevation={6} sx={{ padding: "1em" }}>
                    <MDTypography variant="h6">
                      Passport size picture of two executives
                    </MDTypography>
                    <Input type="file" multiple />
                  </Paper>
                </MDBox>
                <MDBox sx={{ marginBottom: "1em" }}>
                  <Paper elevation={6} sx={{ padding: "1em" }}>
                    <MDTypography variant="h6">
                      Constitution of Society. (Signed by the president and dated)
                    </MDTypography>
                    <Input type="file" />
                  </Paper>
                </MDBox>
                <MDBox>
                  <Paper elevation={6} sx={{ padding: "1em" }}>
                    <MDTypography variant="h6">
                      Endorsement letter from patron. (Senior member of the university)
                    </MDTypography>
                    <Input type="file" />
                  </Paper>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default RequiredDocuments;
