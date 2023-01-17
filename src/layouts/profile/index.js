// @mui material components
import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
// import Grid from "@mui/material/Grid";
// import Divider from "@mui/material/Divider";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
// import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";

// Data

// Images
// import homeDecor1 from "assets/images/home-decor-1.jpg";
// import homeDecor2 from "assets/images/home-decor-2.jpg";
// import homeDecor3 from "assets/images/home-decor-3.jpg";
// import homeDecor4 from "assets/images/home-decor-4.jpeg";
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

import { myClubFetch } from "redux/slices/clubs/getMyClub";

function Overview() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myClubFetch());
  }, [dispatch]);

  const myClub = useSelector((state) => state.myClubFetch, shallowEqual);

  const { club } = myClub;

  const clubName = club.attributes ? club.attributes.club_name : "loading";
  const description = club.attributes ? club.attributes.description : "loading";
  const meetingLocation = club.attributes ? club.attributes.meeting_location : "loading";
  const email = club.attributes ? club.attributes.email : "loading";
  const history = club.attributes ? club.attributes.history : "loading";
  const meetingTime = club.attributes ? club.attributes.meeting_time : "loading";
  const telephoneNumber = club.attributes ? club.attributes.telephone_number : "loading";
  const group = club.attributes ? club.attributes.group : "loading";
  const bannerPhotoUrl = club.attributes ? club.attributes.banner_photo_url : "";
  const profilePhotoUrl = club.attributes ? club.attributes.profile_photo_url : "";

  // const { club_name, description } = myClub.attributes

  console.log(myClub);
  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <MDBox mb={2} />
      <Header
        clubName={clubName}
        bannerPhotoUrl={bannerPhotoUrl}
        profilePhotoUrl={profilePhotoUrl}
        group={group}
      >
        <MDBox mt={5} mb={3}>
          <ProfileInfoCard
            title="profile information"
            description={description}
            info={{
              fullName: clubName,
              mobile: telephoneNumber,
              email,
              location: meetingLocation,
              history,
              time: meetingTime,
              group,
            }}
            action={{ route: "/club/edit", tooltip: "Edit Profile" }}
            shadow={false}
          />
        </MDBox>
      </Header>
    </DashboardLayout>
  );
}

export default Overview;
