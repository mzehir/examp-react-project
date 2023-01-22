import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import ThemeUseContext from "../../hooks/ThemeUseContext";

import FabComp from "../Fab";
import DrawerComp from "../Drawer";
import BoxComp from "../Box";
import AlertComp from "../Alert";
import TypographyComp from "../Typography";

import { THEMES } from "../../utils/constants/themeConstant";

import { grey } from "@mui/material/colors";
import { Palette as PaletteIcon } from "@mui/icons-material";
import { Grid, ListItemButton } from "@mui/material";

const DemoButton = styled.div`
  cursor: pointer;
  background: ${(props) => props.theme.palette.background.paper};
  height: 80px;
  border-radius: 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.825rem;
  position: relative;
  border: 1px solid
    ${(props) =>
      !props.active
        ? props.theme.palette.action.selected
        : props.theme.palette.action.active};
`;

const DemoButtonInner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 0 1px ${(props) => props.theme.palette.action.selected};
  position: relative;

  ${(props) =>
    props.selectedTheme === THEMES.DEFAULT.key &&
    css`
      background: linear-gradient(-45deg, #23303f 50%, ${grey[100]} 0);
    `}
  ${(props) =>
    props.selectedTheme === THEMES.DARK.key &&
    css`
      background: #23303f;
    `}
`;

const DemoTitle = styled(TypographyComp)`
  text-align: center;
`;

const FabStyled = styled(FabComp)`
  position: fixed;
  right: ${(props) => props.theme.spacing(8)};
  bottom: ${(props) => props.theme.spacing(8)};
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 258px;
  overflow-x: hidden;
`;

const Heading = styled(ListItemButton)`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  font-family: ${(props) => props.theme.typography.fontFamily};
  min-height: 56px;

  ${(props) => props.theme.breakpoints.up("sm")} {
    min-height: 64px;
  }
`;

function Demo({ title, themeVariant }) {
  const { theme, setTheme } = ThemeUseContext();

  return (
    <Grid item xs={6}>
      <DemoButton
        active={themeVariant === theme}
        onClick={() => setTheme(themeVariant)}
      >
        <DemoButtonInner selectedTheme={themeVariant} />
      </DemoButton>
      <DemoTitle variant="subtitle2" gutterBottom>
        {title}
      </DemoTitle>
    </Grid>
  );
}

function Demos() {
  return (
    <Wrapper>
      <Heading>Select a demo</Heading>

      <BoxComp px={4} my={3}>
        <AlertComp icon={false} severity="info">
          <strong>Hello!</strong> Select your style below. Choose the ones that
          best fits your needs.
        </AlertComp>
      </BoxComp>

      <BoxComp px={4} my={3}>
        <Grid container spacing={3}>
          <Demo title="Dark" themeVariant={THEMES.DARK.key} />
          <Demo title="Default" themeVariant={THEMES.DEFAULT.key} />
        </Grid>
      </BoxComp>
    </Wrapper>
  );
}

function Settings() {
  const [state, setState] = useState({
    isOpen: false,
  });

  const toggleDrawer = (open) => () => {
    setState({ ...state, isOpen: open });
  };

  return (
    <React.Fragment>
      <FabStyled color="primary" aria-label="Edit" onClick={toggleDrawer(true)}>
        <PaletteIcon />
      </FabStyled>
      <DrawerComp
        anchor="right"
        open={state.isOpen}
        onClose={toggleDrawer(false)}
      >
        <Demos />
      </DrawerComp>
    </React.Fragment>
  );
}

export default Settings;
