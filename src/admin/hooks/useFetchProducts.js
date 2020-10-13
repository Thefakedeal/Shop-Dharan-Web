import useFetch from './useFetch'

export default function useFetchProducts({
    supplier_id,
    available,
}) {
    
    const searchParams= new URLSearchParams()
    if(supplier_id) searchParams.append('supplier_id',supplier_id)
    if(available != null || undefined) searchParams.append('available', available)
    
    const url = `/api/products/getall?${searchParams}`

    const {err,loading,result} = useFetch('GET',url)
    
    return {err,loading,result}
}
