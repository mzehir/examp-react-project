import React from "react";
import ImageUploading from "react-images-uploading";

import GridComp from "../../Grid";
import ShowSelectedImg from "./comp/ShowSelectedImg";
import ImgSelect from "./comp/ImgSelect";

const ImageUploadingComp = ({
  images,
  onChange,
  maxNumber,
  acceptType,
  multiple,
}) => {
  return (
    <ImageUploading
      multiple={multiple}
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
      acceptType={acceptType}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <GridComp container spacing={6}>
          <GridComp item xs={6}>
            <ImgSelect
              dragProps={dragProps}
              onImageUpload={onImageUpload}
              disabled={
                (multiple && maxNumber <= imageList.length) ||
                (!multiple && imageList.length > 0)
              }
            />
          </GridComp>

          <GridComp item xs={6}>
            <ShowSelectedImg
              imageList={imageList}
              onImageRemove={onImageRemove}
              onImageUpdate={onImageUpdate}
              onImageRemoveAll={onImageRemoveAll}
            />
          </GridComp>
        </GridComp>
      )}
    </ImageUploading>
  );
};

export default ImageUploadingComp;

ImageUploadingComp.defaultProps = {
  maxNumber: 2,
  multiple: true,
  acceptType: ["jpg", "gif", "png"],
};
