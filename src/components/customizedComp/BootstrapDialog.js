import React from "react";

import {
  DialogComp,
  DialogTitleComp,
  DialogContentComp,
  DialogActionsComp,
} from "../Dialog";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const BootstrapDialog = styled(DialogComp)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitleComp sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitleComp>
  );
};

export const BootstrapDialogContent = (props) => {
  const { children, ...other } = props;

  return (
    <DialogContentComp dividers {...other}>
      {children}
    </DialogContentComp>
  );
};

export const BootstrapDialogActions = (props) => {
  const { children, ...other } = props;

  return <DialogActionsComp {...other}>{children}</DialogActionsComp>;
};
