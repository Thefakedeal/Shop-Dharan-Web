import React, { useState } from "react";
import { makeStyles, Paper, Backdrop } from "@material-ui/core";
import CustomImageInput from "./CustomImageInput";

import CancelAndOkButton from "../components/CancelAndOkButton";
import fetchWithCredentials from "../helperFunctions/fetchWithCredentials";

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
  object_info = {},
  image_id,
  setImageId,
  open,
  handleClose,
}) {
  const styles = useStyles();
  const [file, setFile] = useState();
  const imageUrl = `/images/${image_id}`;
  const handleUpdatePhoto = async () => {
    const response = await fetchWithCredentials("PUT", url, {
      file,
      ...object_info,
    });
    if (!response.ok) return alert(await response.text());
    alert("photo updated");
    if (typeof setImageId === "function") {
      const jsonresponse = await response.json();
      setImageId(jsonresponse.image_id);
    }
    handleClose();
  };

  return (
    <Backdrop open={open} className={styles.backdrop}>
      <Paper className={styles.wrapper}>
        <CustomImageInput setFile={setFile} url={imageUrl} />
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
