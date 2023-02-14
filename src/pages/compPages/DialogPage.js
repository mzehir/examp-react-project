import React, { useState } from "react";
import styled from "styled-components/macro";

import GridComp from "../../components/Grid";
import TypographyComp from "../../components/Typography";
import ButtonComp from "../../components/Button";
import DividerComp from "../../components/Divider";
import { CardComp, CardContentComp } from "../../components/Card";
import ConfirmationDialog from "../../components/customizedComp/ConfirmationDialog";
import {
  DialogComp,
  DialogTitleComp,
  DialogContentComp,
  DialogContentTextComp,
  DialogActionsComp,
} from "../../components/Dialog";
import {
  BootstrapDialog,
  BootstrapDialogActions,
  BootstrapDialogContent,
  BootstrapDialogTitle,
} from "../../components/customizedComp/BootstrapDialog";

import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);

const Divider = styled(DividerComp)(spacing);

const DialogPage = () => {
  return (
    <React.Fragment>
      <TypographyComp variant="h3" gutterBottom display="inline">
        Dialog Kullanım Örnekleri
      </TypographyComp>

      <Divider my={6} />

      <GridComp container spacing={6}>
        <GridComp item xs={4}>
          <StandartDialog />
        </GridComp>

        <GridComp item xs={4}>
          <UseByWidthDialog />
        </GridComp>

        <GridComp item xs={4}>
          <FullScreenDialog />
        </GridComp>

        <GridComp item xs={4}>
          <ScrollingDialog />
        </GridComp>

        <GridComp item xs={4}>
          <ConfirmationDialogComp />
        </GridComp>

        <GridComp item xs={4}>
          <BootstrapDialogComp />
        </GridComp>
      </GridComp>
    </React.Fragment>
  );
};

export default DialogPage;

//*****************************************************************************************

function StandartDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card>
        <CardContentComp>
          <TypographyComp variant="h6" gutterBottom>
            Standart Kullanım
          </TypographyComp>

          <ButtonComp
            sx={{ my: 3 }}
            variant="outlined"
            onClick={handleClickOpen}
          >
            Standart dialog
          </ButtonComp>

          <TypographyComp variant="body2" gutterBottom>
            {`Open Dialog Value: ${open}`}
          </TypographyComp>
        </CardContentComp>
      </Card>

      {open && (
        <DialogComp open={open} onClose={handleClose}>
          <DialogTitleComp>Dialog Title</DialogTitleComp>
          <DialogContentComp>
            <DialogContentTextComp>Dialog Content</DialogContentTextComp>
          </DialogContentComp>
          <DialogActionsComp>Dialog Actions</DialogActionsComp>
        </DialogComp>
      )}
    </>
  );
}

//*****************************************************************************************

function UseByWidthDialog() {
  const [open, setOpen] = useState(false);
  const [maxWidth, setMaxWidth] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card>
        <CardContentComp>
          <TypographyComp variant="h6" gutterBottom>
            Genişlik ayarı yapılarak kullanım
          </TypographyComp>

          <ButtonComp
            sx={{ m: 2 }}
            variant="outlined"
            onClick={() => {
              setMaxWidth("xs");
              setOpen(true);
            }}
          >
            Max width xs dialog
          </ButtonComp>

          <ButtonComp
            sx={{ m: 2 }}
            variant="outlined"
            onClick={() => {
              setMaxWidth("sm");
              setOpen(true);
            }}
          >
            Max width sm dialog
          </ButtonComp>

          <ButtonComp
            sx={{ m: 2 }}
            variant="outlined"
            onClick={() => {
              setMaxWidth("md");
              setOpen(true);
            }}
          >
            Max width md dialog
          </ButtonComp>

          <ButtonComp
            sx={{ m: 2 }}
            variant="outlined"
            onClick={() => {
              setMaxWidth("lg");
              setOpen(true);
            }}
          >
            Max width lg dialog
          </ButtonComp>

          <ButtonComp
            sx={{ m: 2 }}
            variant="outlined"
            onClick={() => {
              setMaxWidth("xl");
              setOpen(true);
            }}
          >
            Max width xl dialog
          </ButtonComp>
        </CardContentComp>
      </Card>

      {open && (
        <DialogComp maxWidth={maxWidth} open={open} onClose={handleClose}>
          <DialogTitleComp>Dialog Title</DialogTitleComp>
          <DialogContentComp>
            <DialogContentTextComp>
              1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27-28-29-30-31-32-33-34-35-36-37-38-39-40
              Dialog Content
              1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27-28-29-30-31-32-33-34-35-36-37-38-39-40
            </DialogContentTextComp>
          </DialogContentComp>
          <DialogActionsComp>Dialog Actions</DialogActionsComp>
        </DialogComp>
      )}
    </>
  );
}

//*****************************************************************************************

function FullScreenDialog() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card>
        <CardContentComp>
          <TypographyComp variant="h6" gutterBottom>
            Tam genişlik ayarı ile kullanım
          </TypographyComp>

          <ButtonComp
            sx={{ m: 2 }}
            variant="outlined"
            onClick={() => setOpen(true)}
          >
            Full screen dialog
          </ButtonComp>
        </CardContentComp>
      </Card>

      {open && (
        <DialogComp fullScreen={true} open={open} onClose={handleClose}>
          <DialogTitleComp>Dialog Title</DialogTitleComp>
          <DialogContentComp>
            <DialogContentTextComp>
              1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27-28-29-30-31-32-33-34-35-36-37-38-39-40
              Dialog Content
              1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27-28-29-30-31-32-33-34-35-36-37-38-39-40
            </DialogContentTextComp>
          </DialogContentComp>
          <DialogActionsComp>Dialog Actions</DialogActionsComp>
        </DialogComp>
      )}
    </>
  );
}

//*****************************************************************************************

function ScrollingDialog() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClose = () => {
    setOpen(false);
  };

  const count = [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ];

  return (
    <>
      <Card>
        <CardContentComp>
          <TypographyComp variant="h6" gutterBottom>
            Scroll body / paper ayarı ile kullanım
          </TypographyComp>

          <ButtonComp
            sx={{ m: 2 }}
            variant="outlined"
            onClick={() => {
              setScroll("body");
              setOpen(true);
            }}
          >
            Scrolling body dialog
          </ButtonComp>

          <ButtonComp
            sx={{ m: 2 }}
            variant="outlined"
            onClick={() => {
              setScroll("paper");
              setOpen(true);
            }}
          >
            Scrolling paper dialog
          </ButtonComp>
        </CardContentComp>
      </Card>

      {open && (
        <DialogComp scroll={scroll} open={open} onClose={handleClose}>
          <DialogTitleComp>Dialog Title</DialogTitleComp>
          <DialogContentComp>
            {count.map((x, index) => (
              <DialogContentTextComp key={index}>
                1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27-28-29-30-31-32-33-34-35-36-37-38-39-40
                Dialog Content
                1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27-28-29-30-31-32-33-34-35-36-37-38-39-40
              </DialogContentTextComp>
            ))}
          </DialogContentComp>
          <DialogActionsComp>Dialog Actions</DialogActionsComp>
        </DialogComp>
      )}
    </>
  );
}

//*****************************************************************************************

function ConfirmationDialogComp() {
  const ConfirmationDialogProps = {
    titleText: "Title Text",
    contentText: "Content Questions Text",
    yesButtonText: "Yes",
    noButtonText: "No",
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Card>
        <CardContentComp>
          <TypographyComp variant="h6" gutterBottom>
            Confirmation dialog kullanım
          </TypographyComp>

          <ButtonComp
            sx={{ m: 2 }}
            variant="outlined"
            onClick={() => setOpen(true)}
          >
            Confirmation dialog
          </ButtonComp>
        </CardContentComp>
      </Card>

      {open && (
        <ConfirmationDialog
          open={open}
          yesButtonClick={() => {
            alert("Yes Button Click");
            setOpen(false);
          }}
          noButtonClick={() => {
            alert("No Button Click");
            setOpen(false);
          }}
          {...ConfirmationDialogProps}
        />
      )}
    </>
  );
}

//*****************************************************************************************

function BootstrapDialogComp() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card>
        <CardContentComp>
          <TypographyComp variant="h6" gutterBottom>
            Bootstrap Dialog kullanım
          </TypographyComp>

          <ButtonComp
            sx={{ m: 2 }}
            variant="outlined"
            onClick={() => setOpen(true)}
          >
            Bootstrap Dialog
          </ButtonComp>
        </CardContentComp>
      </Card>

      {open && (
        <BootstrapDialog open={open} onClose={() => setOpen(false)}>
          <BootstrapDialogTitle onClose={() => setOpen(false)}>
            Bootstrap Dialog Title
          </BootstrapDialogTitle>

          <BootstrapDialogContent>
            Bootstrap Dialog Content Bootstrap Dialog ContentBootstrap Dialog
            ContentBootstrap Dialog ContentBootstrap Dialog ContentBootstrap
            Dialog ContentBootstrap Dialog ContentBootstrap Dialog Content
          </BootstrapDialogContent>

          <BootstrapDialogActions>
            <ButtonComp color="success" onClick={() => alert("Yes")}>
              Yes text
            </ButtonComp>
            <ButtonComp color="error" onClick={() => alert("No")} autoFocus>
              No text
            </ButtonComp>
          </BootstrapDialogActions>
        </BootstrapDialog>
      )}
    </>
  );
}
