import React from 'react'
import {Box, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    container:{
        display: "flex",
        flex:1,
        width:"100%",
        flexDirection: "column",
        overflowY: "scroll",
        overflowX: "hidden"
    }
})

export default function Container({children}) {
    const styles = useStyles()
    return (
        <Box className={styles.container}>
            {children}
        </Box>
    )
}
