import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

export const CardComp = (props) => {
  const { children, ...other } = props;

  return <Card {...other}>{children}</Card>;
};

export const CardHeaderComp = (props) => {
  const { ...other } = props;

  return <CardHeader {...other} />;
};

export const CardContentComp = (props) => {
  const { children, ...other } = props;

  return <CardContent {...other}>{children}</CardContent>;
};

// export const CardComp = (props) => {
//   const { children, ...other } = props;

//   return <Card {...other}>{children}</Card>;
// };

// export const CardComp = (props) => {
//   const { children, ...other } = props;

//   return <Card {...other}>{children}</Card>;
// };
