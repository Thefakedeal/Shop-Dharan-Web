import React from 'react'
import Logo from '../components/Logo'
import LightScreen from '../components/LightScreen'
import LoginForm from '../forms/LoginForm'

export default function LoginScreen() {
    return (
        <LightScreen>
            <Logo variant="red"/>
            <LoginForm />
        </LightScreen>
    )
}
