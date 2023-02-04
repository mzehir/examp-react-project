import React from "react";
import PropTypes from "prop-types";

import FormControlComp from "../FormControl";
import InputLabel from "@mui/material/InputLabel";

import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const inputTypeEnum = ["InputComp", "FilledInputComp", "OutlinedInputComp"];

//*****************************************************************************************

const TextFieldPassword = ({
  inputType,
  fullWidth,
  margin,
  size,
  ...props
}) => {
  const [comp, setComp] = React.useState(Input);
  const [FControlVariant, setFControlVariant] = React.useState("standard");

  React.useEffect(() => {
    if (inputType === inputTypeEnum[0]) {
      setComp(Input);
      setFControlVariant("standard");
    } else if (inputType === inputTypeEnum[1]) {
      setComp(FilledInput);
      setFControlVariant("filled");
    } else {
      setComp(OutlinedInput);
      setFControlVariant("outlined");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <FormControlComp
        variant={FControlVariant}
        margin={margin}
        size={size}
        fullWidth
      >
        <InputLabel>{props.label}</InputLabel>

        <DynamicComp Component={comp} {...props} />
      </FormControlComp>
    </React.Fragment>
  );
};

export default TextFieldPassword;

//*****************************************************************************************

TextFieldPassword.propTypes = {
  inputType: PropTypes.oneOf(inputTypeEnum),
};

TextFieldPassword.defaultProps = {
  fullWidth: true,
  inputType: inputTypeEnum[2],
  label: "Password",
  size: "small",
  margin: "normal",
};

//*****************************************************************************************

function DynamicComp({ Component, ...props }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Component
      type={showPassword ? "text" : "password"}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            edge="end"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      {...props}
    />
  );
}
