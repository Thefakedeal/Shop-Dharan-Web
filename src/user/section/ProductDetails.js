import React  from "react";
import Center from '../components/Center'
import ImageComponent from "../components/ImageComponent";


export default function ProductDetails({ product }) {

  return (
    <Center>
      <h2> {product.product_name} </h2>
      <b>Price: Rs.{product.price}</b>
      <ImageComponent src={`/images/${product.image_id}`} />
      <p> {product.product_description} </p>
    </Center>
  );
}
