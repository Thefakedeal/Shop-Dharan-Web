import React from "react";
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  container:{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
})

export default function CancelAndOkButton({
  onClickOk,
  onClickCancel,
  okLabel="Ok",
  cancelLabel = "Cancel",
}) {
  const styles = useStyles()
  return (
    <div className={styles.container} style={{width:"100%"}}>
      <Button color="primary" variant="text" onClick={onClickCancel}>
        {cancelLabel}
      </Button>

      <Button color="primary" variant="contained" onClick={onClickOk}>
        {okLabel}
      </Button>
    </div>
  );
}
