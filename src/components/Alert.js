import React from "react";
import Alert from "@mui/lab/Alert";

const AlertComp = (props) => {
  const { children, ...other } = props;

  return <Alert {...other}>{children}</Alert>;
};

export default AlertComp;
