import React from "react";
import styled from "styled-components/macro";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import TypographyComp from "../../../Typography";
import IconButtonComp from "../../../IconButton";
import { DeleteAllButton } from "../../../customizedComp/CustomButtons";
import { CardComp, CardContentComp, CardHeaderComp } from "../../../Card";

import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { spacing } from "@mui/system";

const Card = styled(CardComp)(spacing);

const perfectScrollbarStyle = {
  maxHeight: "650px",
};

const imageListSxStyle = {
  width: "100%",
  paddingRight: 3,
  paddingLeft: 3,
};

const imageListItemSxStyle = {
  paddingBottom: "10px",
};

const ShowSelectedImg = ({
  imageList,
  onImageUpdate,
  onImageRemove,
  onImageRemoveAll,
}) => {
  return (
    <Card>
      <CardHeaderComp
        action={
          <DeleteAllButton
            disabled={imageList.length < 1}
            onClick={onImageRemoveAll}
          />
        }
      />

      <CardContentComp style={{ padding: 0 }}>
        {imageList.length > 0 ? (
          <PerfectScrollbar
            style={perfectScrollbarStyle}
            options={{ suppressScrollY: false }}
            key={1}
          >
            <ImageList sx={imageListSxStyle}>
              {imageList.map((image, index) => (
                <ImageListItem key={index} sx={imageListItemSxStyle}>
                  <ImageToolbar
                    onImageUpdate={onImageUpdate}
                    onImageRemove={onImageRemove}
                    index={index}
                  />
                  <img
                    src={`${image.data_url}`}
                    srcSet={`${image.data_url}`}
                    alt={"item.title"}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </PerfectScrollbar>
        ) : (
          <NoData />
        )}
      </CardContentComp>
    </Card>
  );
};

export default ShowSelectedImg;

//ImageToolbar***********************************************************************************

const imageToolbarWrapperStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  justifyContent: "end",
  borderRadius: "5px",
  marginBottom: "3px",
  backgroundColor: "#99BFEB",
};

const ImageToolbar = ({ onImageUpdate, onImageRemove, index }) => {
  return (
    <div style={imageToolbarWrapperStyle}>
      <IconButtonComp
        size="small"
        color="primary"
        onClick={() => onImageUpdate(index)}
      >
        <UpdateIcon />
      </IconButtonComp>

      <IconButtonComp
        size="small"
        color="error"
        onClick={() => onImageRemove(index)}
      >
        <DeleteIcon />
      </IconButtonComp>
    </div>
  );
};

//NoData***********************************************************************************

const noDataWrapperStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: 490,
};

const NoData = () => {
  return (
    <div style={noDataWrapperStyle}>
      <TypographyComp variant="h2" gutterBottom>
        No Data Avaible
      </TypographyComp>
    </div>
  );
};
