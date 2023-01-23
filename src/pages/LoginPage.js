import React from "react";
import styled from "styled-components/macro";

import PaperComp from "../components/Paper";
import TypographyComp from "../components/Typography";
import TextFieldComp from "../components/TextField";
import TextFieldPassword from "../components/customizedComp/TextFieldPassword";
import ButtonComp from "../components/Button";

import { ReactComponent as Logo } from "../vendor/logo.svg";

import { spacing } from "@mui/system";
import { Checkbox, FormControlLabel } from "@mui/material";

const TextField = styled(TextFieldComp)(spacing);

const Brand = styled(Logo)`
  fill: ${(props) => props.theme.palette.primary.main};
  width: 64px;
  height: 64px;
  margin-bottom: 32px;
`;

const Wrapper = styled(PaperComp)`
  padding: ${(props) => props.theme.spacing(6)};

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

function LoginPage() {
  return (
    <React.Fragment>
      <Brand />
      <Wrapper>
        <TypographyComp component="h1" variant="h4" align="center" gutterBottom>
          Welcome back
        </TypographyComp>

        <TypographyComp component="h2" variant="body1" align="center">
          Sign in to your account to continue
        </TypographyComp>

        <form>
          <TextField
            fullWidth
            my={2}
            id="email"
            name="email"
            label="Email Address"
          />

          <TextFieldPassword
            fullWidth
            my={2}
            id="password"
            name="password"
            label="Password"
            type="password"
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <ButtonComp
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={false}
          >
            Sign in
          </ButtonComp>
        </form>
      </Wrapper>
    </React.Fragment>
  );
}

export default LoginPage;
