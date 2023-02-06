import React, { useState } from "react";
import styled from "styled-components/macro";

import GridComp from "../../components/Grid";
import BoxComp from "../../components/Box";
import TypographyComp from "../../components/Typography";
import DividerComp from "../../components/Divider";
import ButtonComp from "../../components/Button";
import ButtonLoadingComp from "../../components/ButtonLoading";
import SaveIcon from "@mui/icons-material/Save";
import { CardComp, CardContentComp } from "../../components/Card";
import {
  CancelButton,
  DeleteButton,
  SaveButton,
  SendButton,
} from "../../components/customizedComp/CustomButtons";

import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);

const Divider = styled(DividerComp)(spacing);

const ButtonPage = () => {
  return (
    <React.Fragment>
      <TypographyComp variant="h3" gutterBottom display="inline">
        Button Kullanım Örnekleri
      </TypographyComp>

      <Divider my={6} />

      <GridComp container spacing={6}>
        <GridComp item xs={4}>
          <StandartButton />
        </GridComp>

        <GridComp item xs={4}>
          <CustomButtons />
        </GridComp>

        <GridComp item xs={4}>
          <LoadingButton />
        </GridComp>
      </GridComp>
    </React.Fragment>
  );
};

export default ButtonPage;

//*****************************************************************************************

function StandartButton() {
  const onClick = () => {
    alert("Button onClick...");
  };

  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h6" gutterBottom>
          Standart Kullanım
        </TypographyComp>

        <ButtonComp onClick={onClick}>Click</ButtonComp>
      </CardContentComp>
    </Card>
  );
}

//*****************************************************************************************

function CustomButtons() {
  const onClick = (name) => {
    alert(name);
  };

  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h6" gutterBottom>
          Custom Buttons Kullanımı
        </TypographyComp>

        <BoxComp style={{ display: "flex", gap: "5px" }}>
          <SendButton onClick={() => onClick("Send Button")} />
          <SaveButton onClick={() => onClick("Save Button")} />
          <DeleteButton onClick={() => onClick("Delete Button")} />
          <CancelButton onClick={() => onClick("Cancel Button")} />
        </BoxComp>

        <Divider my={6} />

        <BoxComp style={{ display: "flex", gap: "5px" }}>
          <SendButton disabled={true} />
          <SaveButton disabled={true} />
          <DeleteButton disabled={true} />
          <CancelButton disabled={true} />
        </BoxComp>
      </CardContentComp>
    </Card>
  );
}

//*****************************************************************************************

function LoadingButton() {
  const [loading, setLoading] = React.useState(false);

  const onClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h6" gutterBottom>
          Loading Button Kullanım
        </TypographyComp>

        <BoxComp style={{ display: "flex", gap: "5px" }}>
          <ButtonLoadingComp
            loading={loading}
            variant="outlined"
            onClick={onClick}
            loadingIndicator="Loading…"
          >
            <span>Click</span>
          </ButtonLoadingComp>

          <ButtonLoadingComp
            loading={loading}
            variant="outlined"
            onClick={onClick}
          >
            Click
          </ButtonLoadingComp>

          <ButtonLoadingComp
            loading={loading}
            variant="outlined"
            onClick={onClick}
            loadingPosition="start"
            startIcon={<SaveIcon />}
          >
            Click
          </ButtonLoadingComp>

          <ButtonLoadingComp
            loading={loading}
            variant="outlined"
            onClick={onClick}
            loadingPosition="end"
            endIcon={<SaveIcon />}
          >
            Click
          </ButtonLoadingComp>
        </BoxComp>
      </CardContentComp>
    </Card>
  );
}
