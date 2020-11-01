import React from 'react'
import {Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    text:{
        fontWeight: "bold",
        "&:hover": {
            textDecoration: "underline",
            cursor: "pointer"
        }
    }
})

export default function RedText({children, ...fields}) {
    const styles = useStyles()
    return (
       <Typography color={"primary"} className={styles.text} {...fields}>
           {children}
       </Typography>
    )
}
