import React from "react";

import ButtonComp from "../Button";
import {
  DialogComp,
  DialogTitleComp,
  DialogContentComp,
  DialogContentTextComp,
  DialogActionsComp,
} from "../Dialog";

const ConfirmationDialog = ({
  open,
  titleText,
  contentText,
  yesButtonText,
  noButtonText,
  yesButtonClick,
  noButtonClick,
}) => {
  const handleClickOpen = () => {
    yesButtonClick();
  };

  const handleClose = () => {
    noButtonClick();
  };
  return (
    <DialogComp
      open={open}
      onClose={handleClose}
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitleComp>{titleText}</DialogTitleComp>

      <DialogContentComp>
        <DialogContentTextComp>{contentText}</DialogContentTextComp>
      </DialogContentComp>

      <DialogActionsComp>
        <ButtonComp color="success" onClick={() => handleClickOpen()}>
          {yesButtonText}
        </ButtonComp>
        <ButtonComp color="error" onClick={() => handleClose()} autoFocus>
          {noButtonText}
        </ButtonComp>
      </DialogActionsComp>
    </DialogComp>
  );
};

export default ConfirmationDialog;
