import React from 'react'
import RedScreen from '../components/RedScreen'
import Loading from '../components/Loading'
import Logo from '../components/Logo'

export default function LoadingScreen() {
    return (
       <RedScreen>
           <Logo />
           <Loading color="secondary" loading={true}/>
       </RedScreen>
    )
}
