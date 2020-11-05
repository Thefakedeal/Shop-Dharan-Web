import React from 'react'
import LightScreen from '../components/LightScreen'
import NavBar from '../components/NavBar'
import ChangePasswordForm from '../forms/ChangePasswordForm'
export default function ChangePasswordScreen() {
    return (
        <LightScreen>
            <NavBar title="Change Password"/>
            <ChangePasswordForm />
        </LightScreen>
    )
}
