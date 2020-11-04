import React from 'react'
import { useHistory} from 'react-router-dom'
import NAVLINKS from '../defaults/navlinks.json'
import useFetchAddress from '../hooks/useFetchAddress'
import LightScreen from '../components/LightScreen'
import NavBar from '../components/NavBar'
import CenterPaper from '../components/CenterPaper'
import Loading from '../components/Loading'
import Errors from '../components/Errors'
import DisplayAddress from '../section/DisplayAddress'
import CustomButton from '../components/CustomButton'

export default function AddressScreen() {
    const {err, loading, result, reloadResources} = useFetchAddress()
    const history = useHistory()
    return (
        <LightScreen>
            <NavBar title="Address" />
            <CustomButton
                    variant="text"
                    onClick={()=>{
                        history.push(`${NAVLINKS.Address}/add`)
                    }}
                >
                    Add Address
                </CustomButton>
            <CenterPaper>
                <CustomButton
                    variant="text"
                    onClick={reloadResources}
                >
                    Reload
                </CustomButton>
                {loading && <Loading loading={loading}/>}
                {err && <Errors errors={[err]}/>}
                {result.map(address=>(
                    <DisplayAddress key={address.address_id} address={address} onDelete={reloadResources}/>
                ))}
            </CenterPaper>
        </LightScreen>
    )
}
