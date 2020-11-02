import React from 'react'
import COLORS from '../defaults/colors.json'
import {makeStyles, Paper} from '@material-ui/core'

const useStyles = makeStyles({
    fullscreen:{
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLORS.PRIMARY_WHITE,
        flex: 1,
        marginLeft: "auto",
        marginRight: "auto",
        overflowY: "auto",
        // alignItems: "center",
        maxWidth: 800,
        overflowX: "hidden",
        minHeight: "100vh",
    }
}) 
export default function LightScreen({children}) {
    const styles = useStyles()
    return (
        <Paper className={styles.fullscreen}> 
             {children}
        </Paper>
    )
}
