import React from "react";
import styled from "styled-components/macro";

import GridComp from "../../components/Grid";
import TextFieldComp from "../../components/TextField";
import TextFieldIcon from "../../components/customizedComp/TextFieldIcon";
import TextFieldPassword from "../../components/customizedComp/TextFieldPassword";
import TypographyComp from "../../components/Typography";
import DividerComp from "../../components/Divider";
import { CardComp, CardContentComp } from "../../components/Card";

import AccountCircle from "@mui/icons-material/AccountCircle";
import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);

const Divider = styled(DividerComp)(spacing);

const TextFieldPage = () => {
  return (
    <React.Fragment>
      <TypographyComp variant="h3" gutterBottom display="inline">
        Text Fields Kullanım Örnekleri
      </TypographyComp>

      <Divider my={6} />

      <GridComp container spacing={6}>
        <GridComp item xs={4}>
          <StandartTextFields />
        </GridComp>

        <GridComp item xs={4}>
          <TextFieldsWithIcon />
        </GridComp>

        <GridComp item xs={4}>
          <PasswodTextFields />
        </GridComp>
      </GridComp>
    </React.Fragment>
  );
};

export default TextFieldPage;

//*****************************************************************************************

function StandartTextFields() {
  const [value, setValue] = React.useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const textFieldProps = {
    label: "label",
  };

  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h6" gutterBottom>
          Standart Kullanım
        </TypographyComp>

        <TextFieldComp {...textFieldProps} value={value} onChange={onChange} />

        <TypographyComp variant="body2" gutterBottom>
          {`Sonuç: ${value}`}
        </TypographyComp>
      </CardContentComp>
    </Card>
  );
}

//*****************************************************************************************

function TextFieldsWithIcon() {
  const [value, setValue] = React.useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const textFieldProps = {
    label: "label",
  };

  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h6" gutterBottom>
          İcon ile Kullanım
        </TypographyComp>

        <TextFieldIcon
          {...textFieldProps}
          inputProps={{
            startAdornment: {
              comp: <AccountCircle />,
              props: { position: "start" },
            },
            endAdornment: {
              comp: "USER",
              props: { position: "end" },
            },
          }}
          value={value}
          onChange={onChange}
        />

        <TypographyComp variant="body2" gutterBottom>
          {`Sonuç: ${value}`}
        </TypographyComp>
      </CardContentComp>
    </Card>
  );
}

//*****************************************************************************************

function PasswodTextFields() {
  const [value, setValue] = React.useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const TextFieldPasswordProps = {
    label: "Password",
  };

  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h6" gutterBottom>
          Parola Amacıyla Kullanım
        </TypographyComp>

        <TextFieldPassword
          {...TextFieldPasswordProps}
          value={value}
          onChange={onChange}
        />

        <TypographyComp variant="body2" gutterBottom>
          {`Sonuç: ${value}`}
        </TypographyComp>
      </CardContentComp>
    </Card>
  );
}
