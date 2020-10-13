import React,{useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom'

import {CircularProgress, TextField,makeStyles, Button} from '@material-ui/core'
import LightScreen from '../components/LightScreen'
import ErrorText from '../components/ErrorText'
import NavigationBar from '../components/NavigationBar'
import fetchWithCredentials from '../helperFunctions/fetchWithCredentials'
import DisplaySuppliers from '../components/DisplaySuppliers'
import deleteCity from '../helperFunctions/deleteCity'
import updateCity from '../helperFunctions/updateCity'

const useStyles = makeStyles({
    button: { margin: "1rem", width: "80vmin" },
  });

export default function CityScreen() {
    const {id} = useParams()
    const url = `/api/cities/get?city_id=${id}`
    const styles = useStyles()

    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('City')
    const history = useHistory()

    useEffect(()=>{
        const getData =  async () =>{
            setLoading(true);
            const response = await fetchWithCredentials('GET', url);
            const data = await response.json()
            setName(data.city_name);
            setLoading(false)
            setTitle(data.city_name)
        }

        getData()
            .catch(err=> setErr(err))
    },[])
    
    const CityInfo = ()=>{
        const handleName = (e)=>{
            setName(e.target.value)
        }
        
        const handleDelete = async ()=>{
            const confirmed = window.confirm("Are You Sure You Want To Delete This City?")
            if(!confirmed) return;
            const deleted = await deleteCity(id);
            if(deleted){
                window.alert("City Deleted")
                history.goBack()
                return;
            }
            window.alert("Failed to Delete")
        }

        const handleUpdate = async ()=>{
            const confirmed = window.confirm('Are You Sure You Want To Update');
            if(!confirmed) return;
            const updated = await updateCity(id,name);
            if(updated){
                window.alert("City Updated")
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
            <DisplaySuppliers city_id={id} />
        </LightScreen>
    )
}
