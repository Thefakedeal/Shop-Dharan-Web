import React from "react";
import CenterPaper from "../components/CenterPaper";
import ImageComponent from "../components/ImageComponent";
import HeadingText from "../components/HeadingText";

import { capitalizeEachWord } from "../helperFunctions/capitalize";

export default function DisplaySupplier({supplier}) {

  return (
    <CenterPaper>
      <HeadingText> {capitalizeEachWord(supplier.supplier_name)} </HeadingText>
      <ImageComponent src={`/images/${supplier.image_id}`} />
      <p style={{ maxWidth: 400, textAlign: "center", fontWeight: "bold" }}>
        {supplier.supplier_description}
      </p>
    </CenterPaper>
  );
}
