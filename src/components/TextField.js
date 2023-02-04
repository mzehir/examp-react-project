import React from "react";
import TextField from "@mui/material/TextField";

const TextFieldComp = ({ ...props }) => {
  return <TextField {...props} />;
};

export default TextFieldComp;

TextFieldComp.defaultProps = {
  fullWidth: true,
  variant: "outlined",
  label: "",
  size: "small",
  margin: "normal",
};
