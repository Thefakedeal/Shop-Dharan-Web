import useFetch from './useFetch'

export default function useFetchCatagories(){
    const url = `/api/catagories/getall`;
    const { loading, result, err } = useFetch(url);
    return {loading, result, err} 
}