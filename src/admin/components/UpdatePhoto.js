import React, { useState } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import AddPhoto from "./AddImage";

import CancelAndOkButton from "../components/CancelAndOkButton";
import uploadFilesWithCredentials from "../helperFunctions/uploadFilesWithCredentials";

const useStyles = makeStyles({
  button: { margin: "1rem", width: "80vmin" },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    alignItems: "center",
    gap: "1em",
  },

});

export default function UpdatePhoto({
  url,
  handleClose = () => {},
  object_info = {},
  image_id,
}) {
  const styles = useStyles();
  const [file, setFile] = useState();
  const imageUrl = `/images/${image_id}`
  const handleUpdatePhoto = async () => {
    const response = await uploadFilesWithCredentials("PUT", url, {
      file,
      ...object_info,
    });
    if (!response.ok) return alert(await response.text());
    alert("photo updated");
    handleClose();
  };

  return (
    <Paper className={styles.wrapper}>
      <AddPhoto setFile={setFile} url={imageUrl}/>
      <CancelAndOkButton
        okLabel={"Update"}
        onClickOk={handleUpdatePhoto}
        cancelLabel={"Cancel"}
        onClickCancel={handleClose}
      />
    </Paper>
  );
}
