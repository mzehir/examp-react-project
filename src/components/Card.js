import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const CardComp = (props) => {
  const { children, ...other } = props;

  return <Card {...other}>{children}</Card>;
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

// export const CardComp = (props) => {
//   const { children, ...other } = props;

//   return <Card {...other}>{children}</Card>;
// };
