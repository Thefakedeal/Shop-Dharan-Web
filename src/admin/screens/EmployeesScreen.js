import React,{useState} from "react";
import {
  Button,
  Backdrop,
  makeStyles
} from "@material-ui/core";
 
import { useHistory } from "react-router-dom";

import LightScreen from "../components/LightScreen";

import Navigationbar from "../components/NavigationBar";
import DisplayEmployees from '../components/DisplayEmployees'
import AddEmployees from '../components/AddEmployees'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function AddEmployee({open, handleClose}){
  const styles = useStyles()
  return(
    <Backdrop open={open} className={styles.backdrop} >
      <AddEmployees handleClose={handleClose}/>
    </Backdrop>
  )
}
 
export default function EmployeesScreen({match}) {

  const history = useHistory();
  
  const [ open, setOpen] = useState(false);

  const handleOpen = ()=>{
    setOpen(true)
  }
  const handleClose = ()=>{
    setOpen(false)
  }

  const goToAdd = () => {
    history.push(`${match.url}/add`);
  };


  return (
    <LightScreen>
      <Navigationbar title={"Employees"} />
      <AddEmployee open={open} handleClose={handleClose} />
      <Button color="primary" onClick={handleOpen}>
        Add New
      </Button>
      <DisplayEmployees />
    </LightScreen>
  );
}
