import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { executiveEdit } from "redux/slices/clubs/executiveUpdate";
import { executiveFetch } from "redux/slices/clubs/executivesFetch";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

export default function ExecutiveUpdate({ executive }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [programme, setProgramme] = useState(executive.attributes.programme);
  const [executiveName, setExecutiveName] = useState(executive.attributes.executive_name);
  const [contact, setContact] = useState(executive.attributes.contact);
  const [portfolio, setPortfolio] = useState(executive.attributes.portfolio);
  const [email, setEmail] = useState(executive.attributes.email);

  const { register, getValues, handleSubmit } = useForm();

  const loading = useSelector((state) => state.executiveEdit.loading);
  const error = useSelector((state) => state.executiveEdit.error);

  const handleClickOpen = () => {
    setOpen(true);
    setScroll("paper");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    setSubmitted(true);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  useEffect(() => {
    if (submitted) {
      setSubmitted(false);
      const data = getValues();
      localStorage.setItem("executiveId", JSON.stringify(executive.id));
      dispatch(executiveEdit(data)).then((res) => {
        if (res.type === "executive/executiveEdit/fulfilled") {
          setOpen(false);
          setSuccess(true);
          dispatch(executiveFetch());
        }
      });
    }
  }, [submitted]);

  return (
    <div>
      <Tooltip title="edit" placement="bottom" sx={{ cursor: "pointer" }}>
        <Icon
          // onClick={handleEdit(executive.id)}
          fontSize="medium"
          sx={{ cursor: "pointer" }}
          onClick={handleClickOpen}
        >
          edit
        </Icon>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
      >
        <MDBox component="form" onSubmit={handleSubmit(onSubmit)} fullWidth>
          <DialogTitle id="scroll-dialog-title">Edit Executive</DialogTitle>
          <DialogContent dividers={scroll === "paper"} ref={descriptionElementRef}>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                value={executiveName}
                variant="standard"
                disabled={loading}
                inputProps={{ onChange: (e) => setExecutiveName(e.target.value) }}
                fullWidth
                {...register("executive_name", { required: true })}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="E-mail"
                variant="standard"
                value={email}
                inputProps={{ onChange: (e) => setEmail(e.target.value) }}
                disabled={loading}
                fullWidth
                {...register("email", { required: true })}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Portfolio"
                variant="standard"
                value={portfolio}
                inputProps={{ onChange: (e) => setPortfolio(e.target.value) }}
                disabled={loading}
                fullWidth
                {...register("portfolio", { required: true })}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Programme of Study"
                variant="standard"
                disabled={loading}
                value={programme}
                inputProps={{ onChange: (e) => setProgramme(e.target.value) }}
                fullWidth
                {...register("programme", { required: true })}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Contact"
                variant="standard"
                disabled={loading}
                value={contact}
                inputProps={{ onChange: (e) => setContact(e.target.value) }}
                fullWidth
                {...register("contact", { required: true })}
              />
            </MDBox>
          </DialogContent>
          <DialogActions>
            <Button color="warning" onClick={handleClose}>
              Cancel
            </Button>
            <Button color="success" type="submit">
              Save
            </Button>
          </DialogActions>
          {error && <MDTypography color="warning">Update unsuccessful</MDTypography>}
          {success && <MDTypography color="warning">Update successful</MDTypography>}
        </MDBox>
      </Dialog>
    </div>
  );
}

ExecutiveUpdate.defaultProps = {
  executive: {
    id: "",
    attributes: {
      executive_name: "",
      email: "",
      portfolio: "",
      contact: "",
      programme: "",
    },
  },
};

ExecutiveUpdate.propTypes = {
  executive: PropTypes.shape({
    id: PropTypes.string,
    attributes: PropTypes.shape({
      executive_name: PropTypes.string,
      email: PropTypes.string,
      portfolio: PropTypes.string,
      contact: PropTypes.number,
      programme: PropTypes.string,
    }),
  }),
};
