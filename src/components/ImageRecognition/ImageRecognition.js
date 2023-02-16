import React from "react";
import "./ImageRecognition.css";

const ImageRecognition = ({ imageUrl }) => {
  return (
    <div className="">
      <img
        className="detectedImage"
        id="inputimage"
        alt=""
        src={imageUrl}
      />
    </div>

  );
};

export default ImageRecognition;
