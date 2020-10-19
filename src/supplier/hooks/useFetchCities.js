
import useFetch from './useFetch'

export default function useFetchCities() {
    const url = `/api/cities/getall`;
    const { loading, result, err } = useFetch(url);
    
    return {loading, result, err}
}
