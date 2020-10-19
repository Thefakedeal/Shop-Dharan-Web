import React, { useState } from "react";
import LightScreen from "../components/LightScreen";
import NavBar from "../components/NavBar";
import ProductsTable from "../tables/ProductsTable";
import DisplayAddProduct from "../sections/DisplayAddProducts";
import CustomButton from "../components/CustomButton";

export default function ProductsScreen() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <LightScreen>
      <NavBar title="Products" />
      <CustomButton onClick={handleOpen}> Add Product </CustomButton>
      <ProductsTable />
      <DisplayAddProduct open={open} handleClose={handleClose} />
    </LightScreen>
  );
}
