import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="dbox">
      <input
        type="text"
        name="myImage"
        placeholder="Please enter image URL for sign detection."
        onChange={(event) => {
          onInputChange(event)
          
        }}
      />
      <button
        className="btnForm"
        onClick={onButtonSubmit}
      >
        Detect
      </button>
    </div>
  );
};

export default ImageLinkForm;
