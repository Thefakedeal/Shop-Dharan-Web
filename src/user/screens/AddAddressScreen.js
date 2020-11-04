import React from 'react'
import LightScreen from '../components/LightScreen'
import NavBar from '../components/NavBar'
import AddAddressForm from '../forms/AddAddressForm'

export default function AddAddressScreen() {
    return (
        <LightScreen>
            <NavBar title="Add Address"/>
            <AddAddressForm />
        </LightScreen>
    )
}
