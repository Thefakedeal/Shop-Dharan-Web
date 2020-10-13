import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import EmployeesScreen from '../screens/EmployeesScreen';
import EmployeeScreen from '../screens/EmployeeScreen'

export default function Employee({match}) {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path={`${match.url}/`} component={EmployeesScreen}/>
            <Route path={`${match.url}/:id`} component={EmployeeScreen} />
        </Switch>
        </BrowserRouter>
    )
}
