import React from "react";
import FormControl from "@mui/material/FormControl";

const FormControlComp = (props) => {
  const { children, ...other } = props;

  return <FormControl {...other}>{children}</FormControl>;
};

export default FormControlComp;
