import React from 'react'
import {CircularProgress} from '@material-ui/core'

export default function DisplayLoading({loading, color, ...props}) {
    if(loading) return <CircularProgress  color={color||"primary"} {...props}/>
    return null;
}
