import React from "react";
import ImageUploadingComp from "../../components/multibleComp/ImageUploading/ImageUploading";

const UploadsPage = () => {
  return (
    <div>
      <ImageUploadingCompExample />
    </div>
  );
};

export default UploadsPage;

const ImageUploadingCompExample = () => {
  const imageUploadingProps = {
    maxNumber: 2,
    multiple: true,
    acceptType: ["jpg", "gif", "png"],
  };

  const [images, setImages] = React.useState([]);

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <>
      <button
        onClick={() => {
          console.log(images);
        }}
      >
        Göster
      </button>
      <hr />
      <ImageUploadingComp
        images={images}
        onChange={onChange}
        {...imageUploadingProps}
      />
    </>
  );
};
