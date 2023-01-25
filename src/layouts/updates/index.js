import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useForm } from "react-hook-form";
import { clubUpdate } from "redux/slices/clubs/updateSlice";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDButton from "components/MDButton";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

export default function UpdateClubForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const loading = useSelector((state) => state.clubUpdate.loading);
  const error = useSelector((state) => state.clubUpdate.error);

  const { register, handleSubmit, getValues } = useForm();

  const onSubmit = () => {
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      setSubmitted(false);
      const data = getValues();
      const getClub = JSON.parse(localStorage.getItem("club"));

      if (getClub && getClub.data.id) {
        dispatch(clubUpdate(data)).then((res) => {
          if (res.type === "club/clubUpdate/fulfilled") {
            navigate("/profile");
          }
        });
      }
    }
  }, [submitted]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card
        // elevation={9}
        sx={{
          marginTop: "2em",
        }}
      >
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
            Update club info
          </MDTypography>
        </MDBox>
        {error.length > 0 && (
          <MDBox mt={2}>
            <Typography variant="h5" color="red">
              Failed to update info. Please tryagain.
            </Typography>
          </MDBox>
        )}
        {loading ? (
          <MDBox mt={2}>
            <CircularProgress />
            <Typography variant="h5" color="green">
              Updating...
            </Typography>
          </MDBox>
        ) : (
          <MDBox
            component="form"
            role="form"
            sx={{
              padding: "1em",
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="history"
                  multiline
                  label="History"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  {...register("history")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="description"
                  {...register("description")}
                  label="desciption"
                  fullWidth
                  multiline
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="meeting-time"
                  {...register("meeting_time")}
                  label="Meeting times"
                  fullWidth
                  multiline
                  autoComplete="meeting-time"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="meeting-location"
                  label="meeting_location"
                  {...register("meeting_location")}
                  fullWidth
                  multiline
                  autoComplete="Meeting location"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="membership-size"
                  label="Possible Memebership size"
                  {...register("membership_size")}
                  fullWidth
                  multiline
                  autoComplete="Meeting location"
                  variant="standard"
                />
              </Grid>
            </Grid>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="success" type="submit" fullWidth>
                Update Club Info
              </MDButton>
            </MDBox>
          </MDBox>
        )}
      </Card>
    </DashboardLayout>
  );
}
