import React, {useState} from 'react'
import LightScreen from '../components/LightScreen'
import CitySelect from '../components/CitySelect'
import CustomButton from '../components/CustomButton'
import {useSettings, ACTIONS} from '../contexts/Settings'

export default function SetCityScreen() {
    const [city, setCity] = useState('');
    const {dispatch} = useSettings()

    const setCityValue = ()=>{
        dispatch({type: ACTIONS.SETCITY, payload: city})
    }

    return (
       <LightScreen>
           <CitySelect value={city} setValue={(value)=>setCity(value)}/>
           <CustomButton disabled={!Boolean(city)} onClick={setCityValue}> Set City </CustomButton>
       </LightScreen>
    )
}
