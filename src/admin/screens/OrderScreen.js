import React from "react";
import { useParams} from "react-router-dom";


import LightScreen from '../components/LightScreen'
import NavigationBar from '../components/NavigationBar'
import DisplayOrder from '../section/DisplayOrder'


export default function OrderScreen() {
  const { id } = useParams();
  return (
    <LightScreen>
        <NavigationBar title={"Order"}/>
        <DisplayOrder order_id={id}/>
    </LightScreen>
  )
}
