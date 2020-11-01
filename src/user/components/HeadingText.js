import React from 'react'
import {Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    text:{
        fontWeight: "bold",
        fontSize: 35,
    }
})

export default function HeadingText({children, ...fields}) {
    const styles = useStyles()
    return (
       <Typography color={"primary"} variant="h5" className={styles.text} {...fields}>
           {children}
       </Typography>
    )
}