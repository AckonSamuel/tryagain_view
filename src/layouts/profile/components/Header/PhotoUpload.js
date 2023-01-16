/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import FormControl from "@mui/material/FormControl";
import Tooltip from "@mui/material/Tooltip";
import Input from "@mui/material/Input";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDProgress from "components/MDProgress";
import { postUpload } from "../../../../redux/slices/posts/postUpload";

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function PhotoUpload({ size, title, regis }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, getValues } = useForm();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fileUpload = () => {
    // const formData = new FormData();
    // const club = {
    //   ...data,
    //   banner_photo: data.banner_photo[0],
    // };

    // formData.append("banner_photo", club.banner_photo);
    const data = getValues();
    console.log(data);
    dispatch(postUpload(data)).then((res) => {
      setLoading(true);
      if (res.type === "post/postUpload/fulfilled") {
        setLoading(false);
        setOpen(false);
        window.location.reload();
      }
      if (res.type === "post/postUpload/rejected") {
        setLoading(false);
      }
    });
  };

  return (
    <>
      <Tooltip title={title} placement="top" onClick={handleClickOpen}>
        <Icon fontSize={size}>edit</Icon>
      </Tooltip>
      <MDBox component="form" role="form">
        {loading ? (
          <MDProgress />
        ) : (
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>Choose photo</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <FormControl>
                  <Input type="file" accept="image/*" {...register("banner_photo")} />
                </FormControl>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="button" onClick={handleSubmit(fileUpload)}>
                Upload
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </MDBox>
    </>
  );
}

PhotoUpload.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  regis: PropTypes.string.isRequired,
};

PhotoUpload.defaultProps = {
  size: "small",
  title: "",
};
