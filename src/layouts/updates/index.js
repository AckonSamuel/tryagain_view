import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useForm } from "react-hook-form";
import { clubUpdate } from "redux/slices/clubs/updateSlice";
import { myClubFetch } from "redux/slices/clubs/getMyClub";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDButton from "components/MDButton";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

export default function UpdateClubForm() {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const club = useSelector((state) => state.myClubFetch.club);

  const [clubName, setClubName] = useState(club.attributes ? club.attributes.club_name : "");

  const [possibleMembershipSize, setPossiblMembershipSize] = useState(
    club.attributes ? club.attributes.possible_membership_size : ""
  );

  const [description, setDescription] = useState(
    club.attributes ? club.attributes.description : ""
  );

  const [meetingLocation, setMeetingLocation] = useState(
    club.attributes ? club.attributes.meeting_location : ""
  );

  // const email = club.attributes ? club.attributes.email : "";
  const [history, setHistory] = useState(club.attributes ? club.attributes.history : "");

  const [meetingTime, setMeetingTime] = useState(
    club.attributes ? club.attributes.meeting_time : ""
  );
  const [telephoneNumber, setTelephoneNumber] = useState(
    club.attributes ? club.attributes.telephone_number : ""
  );

  const [group, setGroup] = useState(club.attributes ? club.attributes.group : "");

  const loading = useSelector((state) => state.clubUpdate.loading);
  const error = useSelector((state) => state.clubUpdate.error);

  const { register, handleSubmit, getValues } = useForm();

  const handleup = () => {
    setClubName(club.attributes ? club.attributes.club_name : "");
    setPossiblMembershipSize(club.attributes ? club.attributes.possible_membership_size : "");
    setDescription(club.attributes ? club.attributes.description : "");
    setMeetingLocation(club.attributes ? club.attributes.meeting_location : "");
    setHistory(club.attributes ? club.attributes.history : "");
    setMeetingTime(club.attributes ? club.attributes.meeting_time : "");
    setTelephoneNumber(club.attributes ? club.attributes.telephone_number : "");
    setGroup(club.attributes ? club.attributes.group : "");
  };

  useEffect(() => {
    dispatch(myClubFetch()).then((res) => {
      if (res.type === "club/myClubFetch/fulfilled") {
        handleup();
      }
      else
      handleup();
    });
  }, [dispatch, submitted]);

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
            setSuccess(true);
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
                  id="club-name"
                  multiline
                  value={clubName}
                  inputProps={{ onChange: (e) => setClubName(e.target.value) }}
                  label="Name of Club"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  {...register("club_name")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="number"
                  multiline
                  value={telephoneNumber}
                  inputProps={{ onChange: (e) => setTelephoneNumber(e.target.value) }}
                  label="Telephone number"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                  {...register("telephone_number")}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="standard">
                  <InputLabel htmlFor="group">Group</InputLabel>
                  <Select
                    disabled={loading}
                    {...register("group")}
                    required
                    id="group"
                    value={group}
                    inputProps={{ onChange: (e) => setGroup(e.target.value) }}
                    label="group"
                    fullWidth
                    variant="standard"
                  >
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="history"
                  multiline
                  label="History"
                  value={history}
                  inputProps={{ onChange: (e) => setHistory(e.target.value) }}
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
                  value={description}
                  inputProps={{ onChange: (e) => setDescription(e.target.value) }}
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
                  value={meetingTime}
                  inputProps={{ onChange: (e) => setMeetingTime(e.target.value) }}
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
                  value={meetingLocation}
                  inputProps={{ onChange: (e) => setMeetingLocation(e.target.value) }}
                  multiline
                  autoComplete="Meeting location"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="membership-size"
                  label="Possible Membership size"
                  value={possibleMembershipSize}
                  inputProps={{ onChange: (e) => setPossiblMembershipSize(e.target.value) }}
                  {...register("possible_membership_size")}
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
            {success && <MDTypography color="success">Update successful</MDTypography>}
          </MDBox>
        )}
      </Card>
    </DashboardLayout>
  );
}
