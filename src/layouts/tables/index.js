// @mui material components
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Input from "@mui/material/Input";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data

function Tables() {
  const [rows, setRows] = useState([
    {
      Portfolio: <Input />,
      Name: <Input />,
      Contact: <Input />,
      Programme: <Input />,
      Email: <Input />,
      Signature: <Input />,
      Date: <Input />,
    },
  ]);

  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState(false);

  const columns = [
    { Header: "Portfolio", accessor: "Portfolio", width: "45%", align: "left" },
    { Header: "Name", accessor: "Name", align: "left" },
    { Header: "Contact", accessor: "Contact", align: "center" },
    { Header: "Programme", accessor: "Programme", align: "center" },
    { Header: "Email", accessor: "Email", align: "center" },
    { Header: "Signature", accessor: "Signature", align: "center" },
    { Header: "Date", accessor: "Date", align: "center" },
  ];

  const handleAdd = () => {
    setAdd(true);
    console.log(add);
  };

  const handleRemove = () => {
    setRemove(true);
    console.log(remove);
  };

  useEffect(() => {
    if (remove) {
      setRemove(false);
      setRows(rows.filter((row) => rows.indexOf(row) !== rows.length - 1));
    }
  }, [rows, remove]);

  useEffect(() => {
    if (add) {
      setAdd(false);
      const duplicateArray = [
        {
          Portfolio: <Input />,
          Name: <Input />,
          Contact: <Input />,
          Programme: <Input />,
          Email: <Input />,
          Signature: <Input className="act" />,
          Date: <Input />,
        },
      ];
      setRows([...duplicateArray, ...rows]);
      console.log(rows);
    }
  }, [add, rows]);

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
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
                <MDButton onClick={handleAdd}>Add input field</MDButton>
                <MDButton onClick={handleRemove}>remove executive</MDButton>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
