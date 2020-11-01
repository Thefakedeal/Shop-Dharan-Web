import React from 'react'
import RedScreen from '../components/RedScreen'
import NavLinks from '../section/NavLinks'
import Logo from '../components/Logo'

export default function NavScreen() {
    return (
        <RedScreen>
            <Logo />
            <NavLinks />
        </RedScreen>
    )
}
