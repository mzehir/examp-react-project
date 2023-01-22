import React from "react";
import TextField from "@mui/material/TextField";

const TextFieldComp = (props) => {
  const { children, ...other } = props;

  return <TextField {...other}>{children}</TextField>;
};

export default TextFieldComp;
