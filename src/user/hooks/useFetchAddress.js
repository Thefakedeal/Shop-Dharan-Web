import useFetchWithAuth from './useFetchWithAuth'
import baseURL from '../defaults/baseurl'

export default function useFetchAddress() {
    const url = `${baseURL}/api/user/address/getall`
    const {err, loading, reloadResources ,result=[]} = useFetchWithAuth(url)
    return {err, loading, result, reloadResources}
}