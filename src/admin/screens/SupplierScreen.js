import React from "react";
import { useParams} from "react-router-dom";
import {
  makeStyles,
} from "@material-ui/core";


import LightScreen from '../components/LightScreen'
import NavigationBar from '../components/NavigationBar'
import DisplaySupplier from '../components/DisplaySupplier'
import DisplayProducts from '../components/DisplayProducts'

// const useStyles = makeStyles({
//   button: { margin: "1rem", width: "80vmin" },
// });
 
export default function SupplierScreen() {
  const { id } = useParams();
  return (
    <LightScreen>
        <NavigationBar title={"Supplier"}/>
        <DisplaySupplier supplier_id={id}/>
        <DisplayProducts supplier_id={id}/>
    </LightScreen>
  )
}
