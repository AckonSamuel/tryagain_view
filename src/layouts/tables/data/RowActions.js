import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import CircularProgress from "@mui/material/CircularProgress";
import MDBox from "components/MDBox";
import { executiveFetch } from "redux/slices/clubs/executivesFetch";
import { executiveDelete } from "redux/slices/clubs/executiveDelete";
import ExecutiveUpdate from "examples/Registrations/ExecutiveUpdate";

function RowActions({ executiveId, executive }) {
  const [removeExe, setRemoveExe] = useState(false);
  const [soe, setSoe] = useState("");
  const dispatch = useDispatch();

  const removeLoading = useSelector((state) => state.executiveDelete.loading);

  const handleRemoveExecutive = () => {
    setRemoveExe(true);
    setSoe(executiveId);
  };

  useEffect(() => {
    if (removeExe) {
      setRemoveExe(false);
      dispatch(executiveDelete(executiveId)).then((res) => {
        if (res.type === "executive/executiveDelete/fulfilled") {
          dispatch(executiveFetch());
          setSoe("");
        }
      });
    }
  });
  return (
    <MDBox sx={{ display: "flex", justifyContent: "space-between" }}>
      <ExecutiveUpdate executive={executive} />
      {removeLoading && executiveId === soe ? (
        <CircularProgress />
      ) : (
        <Tooltip title="delete" placement="bottom" sx={{ cursor: "pointer" }}>
          <Icon
            fontSize="medium"
            onClick={handleRemoveExecutive}
            sx={{ color: "red", marginLeft: 5, cursor: "pointer" }}
          >
            delete
          </Icon>
        </Tooltip>
      )}
    </MDBox>
  );
}
export default RowActions;

RowActions.propTypes = {
  executiveId: PropTypes.string.isRequired,
  executive: PropTypes.shape({
    id: PropTypes.string,
    attributes: PropTypes.shape({
      executive_name: PropTypes.string,
      email: PropTypes.string,
      portfolio: PropTypes.string,
      contact: PropTypes.number,
      programme: PropTypes.string,
    }),
  }).isRequired,
};
