import React from "react";
import ButtonComp from "../Button";

import SendIcon from "@mui/icons-material/Send";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";

export const SendButton = (props) => {
  const { children, ...other } = props;

  return (
    <ButtonComp variant="contained" endIcon={<SendIcon />} {...other}>
      Send
    </ButtonComp>
  );
};

export const SaveButton = (props) => {
  const { children, ...other } = props;

  return (
    <ButtonComp
      variant="contained"
      color="success"
      endIcon={<SaveIcon />}
      {...other}
    >
      Save
    </ButtonComp>
  );
};

export const DeleteButton = (props) => {
  const { children, ...other } = props;

  return (
    <ButtonComp
      variant="contained"
      color="error"
      endIcon={<DeleteIcon />}
      {...other}
    >
      Delete
    </ButtonComp>
  );
};

export const CancelButton = (props) => {
  const { children, ...other } = props;

  return (
    <ButtonComp color="secondary" endIcon={<CancelIcon />} {...other}>
      Cancel
    </ButtonComp>
  );
};
