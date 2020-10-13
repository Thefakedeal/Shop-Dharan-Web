import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles, Container} from '@material-ui/core'

const useStyles = makeStyles({
    links:{
        color:" #f2f2f2",
        textDecoration: "solid",
        fontSize: "2em",
        fontWeight: "bold",
        '&:hover':{
            transform: "scale(1.1)"
        }
    },
    container:{
        display: "flex",
        flexDirection: "column",
        padding: 10,
        alignItems: "center",
    }
})

export default function NavLinks() {
    const styles  = useStyles()
    return (
        <Container className={styles.container}>
            <Link to='/admin/employees' className={styles.links}> Employees</Link>
            <Link to='/admin/cities' className={styles.links}> Cities</Link>
            <Link to='/admin/catagories' className={styles.links}> Catagories</Link>
            <Link to='/admin/suppliers' className={styles.links}> Suppliers</Link>
            <Link to='/admin/orders' className={styles.links}> Orders</Link>
            
        </Container>
    )
}
