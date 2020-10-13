import React,{useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom'

import {CircularProgress, TextField,makeStyles, Button} from '@material-ui/core'
import LightScreen from '../components/LightScreen'
import ErrorText from '../components/ErrorText'
import NavigationBar from '../components/NavigationBar'
import fetchWithCredentials from '../helperFunctions/fetchWithCredentials'
import DisplaySuppliers from '../components/DisplaySuppliers'
import deleteCatagory from '../helperFunctions/deleteCatagory'
import updateCatagory from '../helperFunctions/updateCatagory'

const useStyles = makeStyles({
    button: { margin: "1rem", width: "80vmin" },
  });

export default function CityScreen() {
    const {id} = useParams()
    const url = `/api/catagories/get?catagory_id=${id}`
    const styles = useStyles()

    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('Catagory')
    const history = useHistory()

    useEffect(()=>{
        const getData =  async () =>{
            setLoading(true);
            const response = await fetchWithCredentials('GET', url);
            const data = await response.json()
            setName(data.catagory_name);
            setLoading(false)
            setTitle(data.catagory_name)
        }

        getData()
            .catch(err=> setErr(err))
    },[])
    
    const CityInfo = ()=>{
        const handleName = (e)=>{
            setName(e.target.value)
        }
        
        const handleDelete = async ()=>{
            const confirmed = window.confirm("Are You Sure You Want To Delete This Catagory?")
            if(!confirmed) return;
            const deleted = await deleteCatagory(id);
            if(deleted){
                window.alert("Catagory Deleted")
                history.goBack()
                return;
            }
            window.alert("Failed to Delete")
        }

        const handleUpdate = async ()=>{
            const confirmed = window.confirm('Are You Sure You Want To Update');
            if(!confirmed) return;
            const updated = await updateCatagory(id,name);
            if(updated){
                window.alert("Catagory Updated")
                history.goBack()
                return;
            }
            window.alert('Failed To Update')
        }
        return(

            <div className="button-container">
                
            <Button color="primary"
                onClick={handleDelete}
            >
                Delete
            </Button>

            <TextField value={name}
            label="Name"
            variant="outlined"
            className={styles.button}
            value={name}
            autoFocus={true}
            onChange={handleName}
            required
            />

            <Button color="primary" variant="contained"
                onClick = {handleUpdate}
            >
                Update
            </Button>
            </div>
        )
    }

    const Display = ()=>{
        if(loading) return <CircularProgress color="primary" />
        if(err) return <ErrorText> {err} </ErrorText> 
        return <CityInfo />
    }

    return(
        <LightScreen>
            <NavigationBar title={title} />
            <Display />
            <h2> Suppliers </h2>
            <DisplaySuppliers catagory_id={id} />
        </LightScreen>
    )
}
