import useFetchWithAuth from './useFetchWithAuth'


export default function useFetchAddress() {
    const url = `/api/user/address/getall`
    const {err, loading, reloadResources ,result=[]} = useFetchWithAuth(url)
    return {err, loading, result, reloadResources}
}