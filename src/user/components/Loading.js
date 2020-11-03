import React from 'react'
import {CircularProgress} from '@material-ui/core'

export default function DisplayLoading({loading=true, color, center, ...props}) {
    if(loading) return <CircularProgress  color={color||"primary"} style={center && {marginLeft:"auto", marginRight:"auto"}} {...props}/>
    return null;
}
