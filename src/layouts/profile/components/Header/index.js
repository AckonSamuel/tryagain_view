import React, { useState, useEffect } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

// Material Dashboard 2 React components

import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
// import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";

// Material Dashboard 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import burceMars from "assets/images/bruce-mars.jpg";
import backgroundImage from "assets/images/bg-profile.jpeg";

import PhotoUpload from "./PhotoUpload";

function Header({ children, clubName, group, bannerPhotoUrl, profilePhotoUrl }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  // const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  // const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.0),
              rgba(gradients.info.state, 0.0)
            )}, url(${bannerPhotoUrl !== null ? bannerPhotoUrl : backgroundImage})`,
          "&:hover": {
            backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.info.main, 0.6),
                rgba(gradients.info.state, 0.6)
              )}, url(${bannerPhotoUrl !== null ? bannerPhotoUrl : backgroundImage})`,
          },
          "&:hover .tabby": { display: "block", cursor: "pointer" },
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <MDBox
          className="tabby"
          sx={{
            display: "none",
            margin: "auto",
          }}
        >
          <PhotoUpload size="medium" title="Change Banner Photo" regis="banner_photo" />
        </MDBox>
      </MDBox>
      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid
            item
            sx={{
              display: "flex",
              width: 100,
              cursor: "pointer",
              paddingRight: 12,
              "&:hover .tabb": { display: "block", cursor: "pointer" },
            }}
          >
            <MDAvatar
              src={profilePhotoUrl !== null ? profilePhotoUrl : burceMars}
              alt="profile-image"
              size="xl"
              shadow="sm"
            />
            <MDBox>
              <MDBox
                className="tabb"
                sx={{
                  display: "none",
                }}
              >
                <PhotoUpload size="small" title="Change Profile Photo" regis="profile_photo" />
              </MDBox>
            </MDBox>
          </Grid>
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                {clubName}
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                {group}
              </MDTypography>
            </MDBox>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                <Tab
                  label="App"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      home
                    </Icon>
                  }
                />
                <Tab
                  label="Message"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      email
                    </Icon>
                  }
                />
                <Tab
                  label="Settings"
                  icon={
                    <Icon fontSize="small" sx={{ mt: -0.25 }}>
                      settings
                    </Icon>
                  }
                />
              </Tabs>
            </AppBar>
          </Grid> */}
        </Grid>
        {children}
      </Card>
    </MDBox>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: "",
  profilePhotoUrl: backgroundImage,
  bannerPhotoUrl: burceMars,
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
  clubName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  group: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  profilePhotoUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  bannerPhotoUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Header;
