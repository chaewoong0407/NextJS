import React, { useState } from "react";
import dynamic from "next/dynamic";

const Avatar = dynamic(() => import("react-avatar-edit"), { ssr: false });

const index = () => {
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (preview: any) => {
    setPreview(preview);
    console.log(preview);
    console.log(typeof preview);
  };

  const onBeforeFileLoad = (elem: any) => {
    if (elem.target.files[0].size > 500000) {
      alert("File is too big!");
      elem.target.value = "";
    } else {
      console.log(typeof elem.target.files[0]);
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
