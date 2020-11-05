import React from 'react'
import LightScreen from '../components/LightScreen'
import NavBar from '../components/NavigationBar'
import ChangePasswordForm from '../components/ChangePasswordForm'

export default function ChangePasswordScreen() {
    return (
        <LightScreen>
            <NavBar title="Change Password"/>
            <ChangePasswordForm />
        </LightScreen>
    )
}
