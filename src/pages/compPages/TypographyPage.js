import React from "react";
import styled from "styled-components/macro";

import GridComp from "../../components/Grid";
import TypographyComp from "../../components/Typography";
import DividerComp from "../../components/Divider";
import { CardComp, CardContentComp } from "../../components/Card";

import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);

const Divider = styled(DividerComp)(spacing);

const TypographyPage = () => {
  return (
    <React.Fragment>
      <TypographyComp variant="h3" gutterBottom display="inline">
        Typography Kullanım Örnekleri
      </TypographyComp>

      <Divider my={6} />

      <GridComp container spacing={6}>
        <GridComp item xs={4}>
          <StandartTypography />
        </GridComp>

        <GridComp item xs={4}>
          <TypographyHeading />
        </GridComp>

        <GridComp item xs={4}>
          <TypographySubTitle />
        </GridComp>

        <GridComp item xs={4}>
          <TypographyBody />
        </GridComp>

        <GridComp item xs={4}>
          <TypographyButton />
        </GridComp>

        <GridComp item xs={4}>
          <TypographyCustom />
        </GridComp>
      </GridComp>
    </React.Fragment>
  );
};

export default TypographyPage;

//*****************************************************************************************

function StandartTypography() {
  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h6" gutterBottom>
          Standart Kullanım
        </TypographyComp>

        <TypographyComp>Typography Text</TypographyComp>
      </CardContentComp>
    </Card>
  );
}

//*****************************************************************************************

function TypographyHeading() {
  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h6" gutterBottom>
          Heading Kullanım
        </TypographyComp>

        <TypographyComp variant="h1" gutterBottom>
          Typography Text / h1
        </TypographyComp>

        <TypographyComp variant="h2" gutterBottom>
          Typography Text / h2
        </TypographyComp>

        <TypographyComp variant="h3" gutterBottom>
          Typography Text / h3
        </TypographyComp>

        <TypographyComp variant="h4" gutterBottom>
          Typography Text / h4
        </TypographyComp>

        <TypographyComp variant="h5" gutterBottom>
          Typography Text / h5
        </TypographyComp>

        <TypographyComp variant="h6" gutterBottom>
          Typography Text / h6
        </TypographyComp>
      </CardContentComp>
    </Card>
  );
}

//*****************************************************************************************

function TypographySubTitle() {
  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h6" gutterBottom>
          SubTitle Kullanım
        </TypographyComp>

        <TypographyComp variant="subtitle1" gutterBottom>
          Typography Text / subtitle1
        </TypographyComp>

        <TypographyComp variant="subtitle2" gutterBottom>
          Typography Text / subtitle2
        </TypographyComp>
      </CardContentComp>
    </Card>
  );
}

//*****************************************************************************************

function TypographyBody() {
  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h6" gutterBottom>
          Body Kullanım
        </TypographyComp>

        <TypographyComp variant="body1" gutterBottom>
          Typography Text / body1
        </TypographyComp>

        <TypographyComp variant="body2" gutterBottom>
          Typography Text / body2
        </TypographyComp>
      </CardContentComp>
    </Card>
  );
}

//*****************************************************************************************

function TypographyButton() {
  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h6" gutterBottom>
          Button / Caption / Oveline Kullanım
        </TypographyComp>

        <TypographyComp display="block" variant="button" gutterBottom>
          Typography Text / button
        </TypographyComp>

        <TypographyComp display="block" variant="caption" gutterBottom>
          Typography Text / caption
        </TypographyComp>

        <TypographyComp display="block" variant="overline" gutterBottom>
          Typography Text / overline
        </TypographyComp>
      </CardContentComp>
    </Card>
  );
}

//*****************************************************************************************

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
}));

function TypographyCustom() {
  return (
    <Card>
      <CardContentComp>
        <TypographyComp variant="h6" gutterBottom>
          Thema Typography özelliklerini html elemeti üzerinde kullanma.
        </TypographyComp>

        <Div>Typography Text / button</Div>
      </CardContentComp>
    </Card>
  );
}
