import { useState, useEffect} from 'react'

export default function useAccessToken() {
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem('accessToken'));
    useEffect(()=>{
        sessionStorage.setItem('accessToken', accessToken)
    },[accessToken])
    
    return [accessToken,setAccessToken]
}
