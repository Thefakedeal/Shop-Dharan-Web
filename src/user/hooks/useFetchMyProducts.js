import useFetchWithAuth from './useFetchWithAuth'

export default function useFetchMyProducts() {
    const url = '/api/supplier/myproducts'
    const {loading, err, result} = useFetchWithAuth(url)
    return {loading, err, result}
}
