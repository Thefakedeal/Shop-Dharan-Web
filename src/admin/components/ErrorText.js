import React from 'react'
import {Typography} from '@material-ui/core'

export default function ErrorText({children}) {
    return (
        <Typography color="primary">
            {children}
        </Typography>
    )
}
