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

//* Örnek Kullanım

// import TextFieldIcon from "../components/customizedComp/TextFieldIcon";
// import AccountCircle from "@mui/icons-material/AccountCircle";
{
  /* <TextFieldIcon
  fullWidth
  my={2}
  id="id"
  name="name"
  label="label"
  inputProps={{
    startAdornment: {
      comp: <AccountCircle />,
      props: { position: "start" },
    },
    endAdornment: {
      comp: "kg",
      props: { position: "end" },
    },
  }}
/>; */
}
