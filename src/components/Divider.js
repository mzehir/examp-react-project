import React from "react";
import Divider from "@mui/material/Divider";

const DividerComp = (props) => {
  const { children, ...other } = props;

  return <Divider {...other} />;
};

export default DividerComp;
