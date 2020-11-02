import React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardMedia,
  makeStyles,
  Box,
} from "@material-ui/core";

const HEIGHT = 320;
const WIDTH = 320;
const useStyles = makeStyles({
  card: {
    width: WIDTH,
    height: HEIGHT,
  },
  container: {
    width: WIDTH,
    height: HEIGHT,
    padding: 10,
    margin: 10,
  },
  image: {
    height: 200,
    width: 300,
    padding: 10,
  },
});
export default function SupplierCard({
  title,
  description: price,
  imageURI,
  id,
}) {
  const history = useHistory();
  const styles = useStyles();
  return (
    <Box className={styles.container}
    >
      <Card
        className={styles.card}
        onClick={()=>{
          history.push(`/products/${id}`)
        }}
      >
        
        <CardHeader title={title} subheader={`Rs. ${price}`} />
        <CardMedia className={styles.image} image={imageURI} title={title} />
      </Card>
    </Box>
  );
}
