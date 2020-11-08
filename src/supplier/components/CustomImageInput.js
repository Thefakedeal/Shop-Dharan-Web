import React, { useState } from "react";
import { Button, makeStyles, Paper } from "@material-ui/core";
import COLORS from "../defaults/colors.json";
import placeholder from "../placeholder.jpeg";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 400,
    width: 400,
  },
  image: {
    height: 200,
    width: 300,
    objectFit: "cover",
    margin: 10,
    backgroundColor: COLORS.PRIMARY_WHITE,
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    padding: 10,
  },
});

export default function CustomImageInput({ url, setFile }) {
  const [display, setDisplay] = useState(url);
  const styles = useStyles();
  const handleDelete = () => {
    setDisplay();
    setFile();
  };
  return (
    <Paper className={styles.container}>
      <img src={display||placeholder} className={styles.image} alt="Your Uploaded File"/>

      <div className={styles.buttons}>
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
            setFile(photo);
          }}
          hidden
        />
      </div>
    </Paper>
  );
}
