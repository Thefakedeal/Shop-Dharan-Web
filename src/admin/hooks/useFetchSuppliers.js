import useFetch from './useFetch'

export default function useFetchSuppliers({
    visible,
    city_id,
    catagory_id,
    supplier_name
}) {
    
    const searchParams= new URLSearchParams()
    if(city_id) searchParams.append('city_id',city_id)
    if(visible != null || undefined) searchParams.append('visible', visible)
    if(catagory_id) searchParams.append('catagory_id', catagory_id)
    if(supplier_name) searchParams.append('supplier_name', supplier_name)
    
    const url = `/api/suppliers/getall?${searchParams}`

    const {err,loading,result} = useFetch('GET',url)
    
    return {err,loading,result}
}
