import React from "react";

import FormControlComp from "../FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const TextFieldPassword = ({
  inputType = "OutlinedInputComp",
  inputLabelText = "Password",
}) => {
  return (
    <React.Fragment>
      <FormControlComp fullWidth variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">
          {inputLabelText}
        </InputLabel>
        {inputType === "InputComp" && <InputComp />}
        {inputType === "FilledInputComp" && <FilledInputComp />}
        {inputType === "OutlinedInputComp" && <OutlinedInputComp />}
      </FormControlComp>
    </React.Fragment>
  );
};

export default TextFieldPassword;

function InputComp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Input
      id="input-adornment-password"
      type={showPassword ? "text" : "password"}
      endAdornment={
        <InputAdornmentComp
          IconButtonProps={{
            onClick: handleClickShowPassword,
            onMouseDown: handleMouseDownPassword,
          }}
          IconButtonCustomProps={{
            showPassword: showPassword,
          }}
        />
      }
      label="Password"
    />
  );
}

function FilledInputComp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FilledInput
      id="Filled-adornment-password"
      type={showPassword ? "text" : "password"}
      endAdornment={
        <InputAdornmentComp
          IconButtonProps={{
            onClick: handleClickShowPassword,
            onMouseDown: handleMouseDownPassword,
          }}
          IconButtonCustomProps={{
            showPassword: showPassword,
          }}
        />
      }
      label="Password"
    />
  );
}

function OutlinedInputComp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <OutlinedInput
      id="outlined-adornment-password"
      type={showPassword ? "text" : "password"}
      endAdornment={
        <InputAdornmentComp
          IconButtonProps={{
            onClick: handleClickShowPassword,
            onMouseDown: handleMouseDownPassword,
          }}
          IconButtonCustomProps={{
            showPassword: showPassword,
          }}
        />
      }
      label="Password"
    />
  );
}

function InputAdornmentComp(props) {
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        edge="end"
        {...props.IconButtonProps}
      >
        {props.IconButtonCustomProps.showPassword ? (
          <VisibilityOff />
        ) : (
          <Visibility />
        )}
      </IconButton>
    </InputAdornment>
  );
}
