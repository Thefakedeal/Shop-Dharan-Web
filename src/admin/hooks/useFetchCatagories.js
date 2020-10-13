import useFetch from './useFetch'

export default function useFetchCatagories(){
    const url = `/api/catagories/getall`;
    const { loading, result, err } = useFetch("GET", url);
    return {loading, result, err} 
}