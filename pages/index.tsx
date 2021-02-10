import React, { useState } from "react";
import Avatar from "react-avatar-edit";

const index = () => {
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (preview: any) => {
    setPreview(preview);
    console.log(preview);
  };

  const onBeforeFileLoad = (elem: any) => {
    if (elem.target.files[0].size > 500000) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: 400, height: 300 }}>
        <Avatar
          width={390}
          height={295}
          onCrop={onCrop}
          onClose={onClose}
          onBeforeFileLoad={onBeforeFileLoad}
        />
      </div>
      <img src={preview} alt="Preview" />
    </div>
  );
};

export default index;
