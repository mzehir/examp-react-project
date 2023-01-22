import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export const AlertComp = (props) => {
  const { children, ...other } = props;

  return <Alert {...other}>{children}</Alert>;
};

export const AlertTitleComp = (props) => {
  const { children, ...other } = props;

  return <AlertTitle {...other}>{children}</AlertTitle>;
};
