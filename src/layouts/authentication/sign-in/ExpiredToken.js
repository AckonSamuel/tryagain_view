/* eslint-disable react/no-unescaped-entities */
import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import MDBox from "components/MDBox";

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function ExpiredToken({ pop }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <MDBox component="form" role="form">
      <Dialog
        open={pop}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>You need to sign in to continue</DialogTitle>
        <DialogActions>
          <Button
            type="button"
            sx={{
              color: "error.main",
              backgroundColor: "white",
              fontWeight: "bold",
            }}
            onClick={handleLogout}
          >
            Sign in
          </Button>
        </DialogActions>
      </Dialog>
    </MDBox>
  );
}

ExpiredToken.propTypes = {
  pop: PropTypes.bool.isRequired,
};
