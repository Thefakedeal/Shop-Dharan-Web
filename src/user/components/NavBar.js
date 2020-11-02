import React , {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import {ArrowBack, Menu} from '@material-ui/icons'
import COLORS from '../defaults/colors.json'
import NavList from '../section/NavList'

const useStyles = makeStyles({
  nav:{
    display: "flex",
    minHeight: "3em",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1em",
    backgroundColor: COLORS.PRIMARY_RED,
    width: "100%"
  },
  title:{
    marginLeft: "auto",
    marginRight: "auto",
    color: COLORS.PRIMARY_WHITE,
    fontSize: "25px",
    fontWeight: "bold",
  }
})
export default function Navigation({ title="Shop Dharan" }) {
    const history = useHistory()
    const styles = useStyles()
    const [open, setOpen] = useState(false)
    const toggleOpen  = ()=>{
      setOpen(open=> !open)
    }
    useEffect(() => {
      document.title = title
      return ()=>{
        document.title = "Shop Dharan"
      }
    }, [title])
    return (
    <nav className={styles.nav}>
     <ArrowBack  color="secondary" fontSize="large" onClick={history.goBack}/>
      <div className={styles.title}>
          {title}
      </div>
      <Menu onClick={toggleOpen} color="secondary" fontSize="large"/>
      <NavList open={open} onClose={toggleOpen}/>
    </nav>
  );
}