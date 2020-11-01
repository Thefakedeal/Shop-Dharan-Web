import React from 'react'
import Home from './Home'


import {useSettings} from '../contexts/Settings'
import SetCityScreen from '../screens/SetCityScreen'

export default function Main() {
    const {settings} = useSettings()
    if(settings.city_id) return <Home />
    return <SetCityScreen />
}
