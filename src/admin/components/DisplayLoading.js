import React from 'react'
import {CircularProgress} from '@material-ui/core'

export default function DisplayLoading({loading}) {
    if(loading) return <CircularProgress  color="primary"/>
    return null;
}
