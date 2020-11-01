import React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardMedia,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: 320,
    height: 320,
  },
  container: {
    width: 320,
    height: 320,
    padding: 10,
    margin: 10,
  },
  image: {
    height: 200,
    width: 300,
    padding: 10,
  },
});
export default function SupplierCard({ title, description, imageURI, id }) {
  const history = useHistory();
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Card
        className={styles.card}
        onClick={() => {
          history.push(`/suppliers/${id}`);
        }}
      >
        <CardHeader title={title} subheader={description} />
        <CardMedia className={styles.image} image={imageURI} title={title} />
      </Card>
    </Box>
  );
}
