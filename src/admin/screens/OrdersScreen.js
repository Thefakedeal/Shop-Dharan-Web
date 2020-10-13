import React from 'react'

import LightScreen from '../components/LightScreen'
import NavBar from '../components/NavigationBar'

import DisplayOrders from '../section/DisplayOrders'
export default function OrdersScreen() {
    return (
        <LightScreen>
            <NavBar title="Orders"/>
            <DisplayOrders />
        </LightScreen>
    )
}
