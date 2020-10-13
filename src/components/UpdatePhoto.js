import React, { useState } from "react";
import { makeStyles, Paper } from "@material-ui/core";
import AddPhoto from "./AddImage";

import CancelAndOkButton from "../components/CancelAndOkButton";
import uploadFilesWithCredentials from "../helperFunctions/uploadFilesWithCredentials";

const useStyles = makeStyles((theme) => ({
  button: { margin: "1rem", padding: 15 },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "1em",
    alignItems: "center",
    gap: "1em",
  },
  fullcontainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function UpdatePhoto({
  url,
  handleClose = () => {},
  object_info = {},
  image_id,
  open,
  handleClose,
}) {
  const styles = useStyles();
  const [file, setFile] = useState();
  const imageUrl = `/images/${image_id}`;
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
    <Backdrop open={open} className={styles.backdrop}>
      <Paper className={styles.wrapper}>
        <AddPhoto setFile={setFile} url={imageUrl} />
        <CancelAndOkButton
          okLabel={"Update"}
          onClickOk={handleUpdatePhoto}
          cancelLabel={"Cancel"}
          onClickCancel={handleClose}
        />
      </Paper>
    </Backdrop>
  );
}
