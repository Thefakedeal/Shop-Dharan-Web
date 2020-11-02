import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import ProductCard from "../components/ProductCard";

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
  },
});

export default function DisplayProducts({ products = [] }) {
  const styles = useStyles()
    return (
    <Container className={styles.container}>
      {products.map((product) => (
        <ProductCard
          id={product.product_id}
          description={product.price}
          title={product.product_name}
          imageURI={`/images/${product.image_id}`}
          key={product.product_id}
        />
      ))}
    </Container>
  );
}
