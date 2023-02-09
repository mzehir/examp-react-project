import React from "react";
import styled from "styled-components/macro";

import { CardComp, CardContentComp } from "../../../Card";
import { UploadImgButton } from "../../../customizedComp/CustomButtons";

import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);

const uploadImgButtonStyle = {
  borderStyle: "dashed",
  width: "100%",
  height: 200,
};

const ImgSelect = ({ disabled, onImageUpload, dragProps }) => {
  return (
    <Card>
      <CardContentComp>
        <UploadImgButton
          fullWidth
          size="large"
          disabled={disabled}
          style={uploadImgButtonStyle}
          onClick={onImageUpload}
          {...dragProps}
        />
      </CardContentComp>
    </Card>
  );
};

export default ImgSelect;
