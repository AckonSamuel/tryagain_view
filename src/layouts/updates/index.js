import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import MDBox from "components/MDBox";
import { useForm } from "react-hook-form";
import { clubUpdate } from "redux/slices/clubs/updateSlice";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDButton from "components/MDButton";

export default function UpdateClubForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    getValues 
} = useForm();

const onSubmit = () => {
  const data = getValues();
  const getClub = JSON.parse(localStorage.getItem("club"));
  console.log(getClub.data.id);
   if (getClub && getClub.data.id ) {
    dispatch(clubUpdate(data)).
    then((res) => {
        if (res.type === 'club/clubUpdate/fulfilled')
        {
            navigate("/clubs");
        }
    })
   }
};


  return (
    <DashboardLayout>
    <Paper elevation={9} sx={{
        padding: '2em'
    }}>
      <Typography variant="h6">Update club info</Typography>
      <MDBox component="form" role="form" onSubmit={handleSubmit(onSubmit)}>
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
              autoComplete="Meeting location"
              variant="standard"
            />
          </Grid>
        </Grid>
        <MDBox mt={4} mb={1}>
              <MDButton 
              variant="gradient" 
              color="success" 
              type="submit" 
              fullWidth>
                Update Club Info
              </MDButton>
        </MDBox>
      </MDBox>
    </Paper>
    </DashboardLayout>
  );
}
