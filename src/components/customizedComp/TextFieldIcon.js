import React from "react";
import TextFieldComp from "../TextField";
import InputAdornment from "@mui/material/InputAdornment";

const TextFieldIcon = (props) => {
  const { inputProps, ...other } = props;

  return (
    <TextFieldComp
      InputProps={{
        ...(inputProps?.startAdornment
          ? {
              startAdornment: (
                <InputAdornment
                  position="start"
                  {...inputProps?.startAdornment?.props}
                >
                  {inputProps.startAdornment.comp}
                </InputAdornment>
              ),
            }
          : {}),

        ...(inputProps?.endAdornment
          ? {
              endAdornment: (
                <InputAdornment
                  position="end"
                  {...inputProps?.endAdornment?.props}
                >
                  {inputProps.endAdornment.comp}
                </InputAdornment>
              ),
            }
          : {}),
      }}
      {...other}
    />
  );
};

export default TextFieldIcon;
