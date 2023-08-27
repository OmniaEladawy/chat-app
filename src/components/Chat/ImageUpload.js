import { Box, IconButton } from "@mui/material";
import { Camera } from "phosphor-react";
import React from "react";
import ImageUploading from "react-images-uploading";

export function ImageUpload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
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
          // write your building UI
          <div className="upload__image-wrapper">
            {/* <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button> */}
            <IconButton onClick={onImageUpload} {...dragProps}>
              <Camera />
            </IconButton>
            <Box
              sx={{
                position: "absolute",
                bottom: "40px",
                right: "10px",
                width: "500px",
                backgroundColor: "#d8dce4",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                borderRadius: "15px",
              }}
            >
              {imageList.map((image, index) =>
                imageList.length === 1 ? (
                  <img
                    key={index}
                    src={image["data_url"]}
                    alt=""
                    width="300px"
                  />
                ) : (
                  <img
                    key={index}
                    src={image["data_url"]}
                    alt=""
                    width="100px"
                    style={{ margin: "5px" }}
                  />
                )
              )}
            </Box>
          </div>
        )}
      </ImageUploading>
    </Box>
  );
}
