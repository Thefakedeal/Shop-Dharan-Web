import React from 'react'
import NavBar from '../components/NavBar'
import LightScreen from '../components/LightScreen'
import CenterPaper from '../components/CenterPaper'
import {useIsLoggedIn} from '../contexts/LoginInfo'
import Logout from '../section/Logout'
import Login from '../section/Login'
import UserList from '../section/UserList'

export default function UserScreen() {
    const isLoggedIn = useIsLoggedIn()
    
    return (
        <LightScreen>
            <NavBar title="User"/>
            <CenterPaper>
            <UserList />
            {isLoggedIn?<Logout />:<Login/>}
            </CenterPaper>
        </LightScreen>
    )
}
