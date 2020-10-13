
import useFetch from './useFetch'

export default function useFetchCities() {
    const url = `/api/cities/getall`;
    const { loading, result, err } = useFetch("GET", url);
    
    return {loading, result, err}
}
