import React from 'react'
import RedScreen from '../components/RedScreen'
import DisplayLoading from '../components/DisplayLoading'
import Logo from '../components/Logo'

export default function LoadingScreen() {
    return (
       <RedScreen>
           <Logo />
           <DisplayLoading color="secondary" loading={true}/>
       </RedScreen>
    )
}
