import React from 'react'

import RedScreen from '../components/RedScreen'
import Logo from '../components/Logo'
import DisplayLinks from '../sections/DisplayLinks'

export default function NavScreen() {
    return (
        <RedScreen>
            <Logo />
            <DisplayLinks />
        </RedScreen>
    )
}
