import useFetch from './useFetch'

export default function useFetchOrderStatuses() {
    const url = `/api/orderstatus`
    const {loading, err, result=[]} = useFetch(url)
    return {loading, err, result}
}