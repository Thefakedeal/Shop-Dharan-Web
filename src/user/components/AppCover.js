import React from 'react'
import COLORS from '../defaults/colors.json'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    fullscreen:{
        display: "flex",
        flexDirection: "column",
        backgroundColor: COLORS.PRIMARY_WHITE,
        flex: 1,
        alignItems: "center",
        height: "100vh",
        width: "100vw",
    }
}) 
export default function AppCover({children}) {
    const styles = useStyles()
    return (
        <div className={styles.fullscreen}> 
             {children}
        </div>
    )
}
