// @mui material components
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";

// react-form-hook components
import { useForm } from "react-hook-form";

// yup components
import { yupResolver } from "@hookform/resolvers/yup";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import { postUpload } from "redux/slices/posts/postUpload";
import MDButton from "components/MDButton";

function RequiredDocuments() {
  const dispatch = useDispatch();
  const { register, handleSubmit, getValues } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const loading = useSelector((state) => state.postUpload.loading, shallowEqual);
  const error = useSelector((state) => state.postUpload.error, shallowEqual);
  const club = useSelector((state) => state.postUpload.posts, shallowEqual);

  const fileUpload = () => {
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      setSubmitted(false)
      const vad = getValues();
      console.log(vad);
      let data = {};
      ["registration_application_letter", "passport_photos", "constitution", "endorsement_letter" ].forEach((document) => {
        if (vad[document].length > 0) {
          if(document === "passport_photos") {
            data[document] = {};
              data[document]["photo1"] = vad[document][0];
              data[document]["photo2"] = vad[document][1];
          }
          else {
            data[document] = vad[document];
          }
        }
      })
      console.log(data);
      dispatch(postUpload(data)).then((res) => {
        if (res.type === "post/postUpload/fulfilled") {
          console.log(club)
          // window.location.reload();
        }
      });
    }
  }, [submitted]);

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
              <MDBox py={3} px={3} pt={3} pb={3} component="form" role="form">
                <MDBox sx={{ marginBottom: "1em" }}>
                  <Paper elevation={6} sx={{ padding: "1em" }}>
                    <MDTypography variant="h6">Application letter for registration</MDTypography>
                    <Input type="file" {...register("registration_application_letter")}/>
                  </Paper>
                </MDBox>
                <MDBox sx={{ marginBottom: "1em" }}>
                  <Paper elevation={6} sx={{ padding: "1em" }}>
                    <MDTypography variant="h6">
                      Passport size picture of two executives
                    </MDTypography>
                    <Input type="file"
                    inputProps={{ multiple: true }} 
                     {...register("passport_photos")} />
                  </Paper>
                </MDBox>
                <MDBox sx={{ marginBottom: "1em" }}>
                  <Paper elevation={6} sx={{ padding: "1em" }}>
                    <MDTypography variant="h6">
                      Constitution of Society. (Signed by the president and dated)
                    </MDTypography>
                    <Input type="file" {...register("constitution")}/>
                  </Paper>
                </MDBox>
                <MDBox>
                  <Paper elevation={6} sx={{ padding: "1em" }}>
                    <MDTypography variant="h6">
                      Endorsement letter from patron. (Senior member of the university)
                    </MDTypography>
                    <Input type="file" {...register("endorsement_letter")} />
                  </Paper>
                </MDBox>

                <MDButton
                  onClick={fileUpload}
                >
                  Save progress
                </MDButton>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default RequiredDocuments;
