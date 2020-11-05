import React from 'react'
import {Paper, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
})

export default function CenterPaper({children}) {
    const styles = useStyles()
    return (
        <Paper className={styles.container}>
            {children}
        </Paper>
    )
}