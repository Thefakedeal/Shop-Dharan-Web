import React from "react";
import { useParams} from "react-router-dom";


import LightScreen from '../components/LightScreen'
import NavigationBar from '../components/NavigationBar'
import DisplayEmployee from '../components/DisplayEmployee'


export default function EmployeeScreen() {
  const { id } = useParams();
  return (
    <LightScreen>
        <NavigationBar title={"Employee"}/>
        <DisplayEmployee employee_id={id}/>
    </LightScreen>
  )
}
