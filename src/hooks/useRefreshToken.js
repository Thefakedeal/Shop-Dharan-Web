import { useState, useEffect} from 'react'

export default function useRefreshToken() {
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
    useEffect(()=>{
        localStorage.setItem('refreshToken', refreshToken)
    },[refreshToken])
    
    return [refreshToken,setRefreshToken]
}
