import useFetch from './useFetch'

export default function useFetchProduct({product_id}){
    const url = `/api/products/get?product_id=${product_id}`
    const {err, loading, result} = useFetch('GET', url)
    return {err, loading, result}
}