import React from "react";
import { makeStyles } from "@material-ui/core";
import COLORS from "../defaults/colors.json";
import Logo from "../placeholder.jpeg";

const useStyle = makeStyles({
  image: {
    height: 200,
    width: 300,
    objectFit: "cover",
    backgroundColor: COLORS.PRIMARY_WHITE,
  },
});

export default function ImageComponent({ src, alt, ...props }) {
  const styles = useStyle()
  return (
    <img
      src={src}
      className={styles.image}
      alt={alt || "Shop Dharan"}
      {...props}
      onError={(e) => (e.target.src = Logo)}
    />
  );
}
