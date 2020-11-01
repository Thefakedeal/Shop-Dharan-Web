import React from "react";

import useFetchCatagories from "../hooks/useFetchCatagories";
import Loading from "../components/Loading";
import Errors from "../components/Errors";
import LightScreen from '../components/LightScreen'
import DisplayProductByCatagory from "../section/DisplayProductByCatagory";
import CitySelect from '../components/CitySelect'
import NavBar from '../components/NavBar'
import {useSettings, ACTIONS} from '../contexts/Settings'

export default function HomeScreen() {
  const { loading, err, result = [] } = useFetchCatagories();
  const {settings, dispatch} = useSettings()
  if (loading) return <Loading loading={loading} />;
  if (err) return <Errors errors={[err]} />;
  return (
    <LightScreen>
      <NavBar title={"Home"}/>
      <CitySelect value={settings.city_id} setValue={value=>{
        dispatch({type: ACTIONS.SETCITY, payload: value})
      }}/>
        {
          result.map(catagory=>(
            <DisplayProductByCatagory 
             catagory_id={catagory.catagory_id}
             catagory_name={catagory.catagory_name}
             city_id={settings.city_id}
            />
          ))
        }
    </LightScreen>
  )  

}
