import React from 'react'

import NavLinks from '../components/NavLinks'
import Logo from '../components/Logo'
import RedScreen from '../components/RedScreen'

export default function NavScreen() {
    return (
        <RedScreen>
            <Logo />
            <NavLinks />
        </RedScreen>
    )
}
