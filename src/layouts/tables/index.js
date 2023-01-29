// @mui material components
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import AddExecutive from "examples/Registrations/ExecutiveModal";

// Data
import { executiveFetch } from "redux/slices/clubs/executivesFetch";
import RowActions from "./data/RowActions";

function Tables() {
  const dispatch = useDispatch();
  const executives = useSelector((state) => state.executiveFetch.executive);

  useEffect(() => {
    dispatch(executiveFetch());
  }, [dispatch]);

  console.log(executives);
  const columns = [
    { Header: "Portfolio", accessor: "Portfolio", align: "left" },
    { Header: "Name", accessor: "Name", align: "left" },
    { Header: "Contact", accessor: "Contact", align: "center" },
    { Header: "Programme", accessor: "Programme", align: "center" },
    { Header: "Email", accessor: "Email", align: "center" },
    { Header: "Actions", accessor: "Actions", align: "center" },
  ];

  const rows = [];
  const rowlet = [];
  if (executives && executives.length > 0) {
    executives.forEach((executive) => {
      rows.push({
        Name: executive.attributes.executive_name,
        Portfolio: executive.attributes.portfolio,
        Contact: executive.attributes.contact,
        Programme: executive.attributes.programme,
        Email: executive.attributes.email,
        Actions: <RowActions executiveId={executive.id} executive={executive} />,
      });
    });
  }

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
                  Executives data table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <AddExecutive />
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  rowlet={rowlet}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
