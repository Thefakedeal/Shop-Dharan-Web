import React from "react";
import {Button} from "@material-ui/core";


export default function CancelAndOkButton({
  onClickOk,
  onClickCancel,
  okLabel="Ok",
  cancelLabel = "Cancel",
}) {
  return (
    <div className="button-container" style={{width:"100%"}}>
      <Button color="primary" variant="text" onClick={onClickCancel}>
        {cancelLabel}
      </Button>

      <Button color="primary" variant="contained" onClick={onClickOk}>
        {okLabel}
      </Button>
    </div>
  );
}
