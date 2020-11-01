import useFetch from './useFetch'

export default function useFetchSuppliers({
   supplier_id
}) {
    
    
    const url = `/api/suppliers/get?supplier_id=${supplier_id}`

    const {err,loading,result} = useFetch(url)
    
    return {err,loading,result}
}
