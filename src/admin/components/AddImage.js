import React, { useState } from "react";
import { Button } from "@material-ui/core";

export default function AddImage({ url, setFile }) {
  const [display, setDisplay] = useState(url);

  const handleDelete = () => {
    setDisplay();
    setFile()
  };
  return (
    <>
      {display && (
        <img
          src={display}
          style={{ height: 200, width: 300, objectFit: "cover" }}
          alt="Logo"
        />
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          justifyContent: "space-evenly",
          width: "90%",
        }}
      >
        {display && (
          <Button onClick={handleDelete} color="primary">
            Remove
          </Button>
        )}
        <Button variant="contained" color="primary">
          <label for="file" id="upload">
            Add Photo
          </label>
        </Button>
        <input
          type="file"
          id="file"
          accept=".jpg,.jpeg,.webp,.png"
          onChange={(e) => {
            const photo = e.target.files[0];
            setDisplay(URL.createObjectURL(photo));
            setFile(photo)
          }}
          hidden
        />
      </div>
    </>
  );
}
