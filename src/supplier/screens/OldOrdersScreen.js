import React from 'react'
import LightScreen from '../components/LightScreen'
import NavBar from '../components/NavBar'
import DisplayOldOrders from '../sections/DisplayOldOrders'

export default function NewOrdersScreen() {
    return (
        <LightScreen>
            <NavBar title="Delivered Orders"/>
            <DisplayOldOrders/>
        </LightScreen>
    )
}
