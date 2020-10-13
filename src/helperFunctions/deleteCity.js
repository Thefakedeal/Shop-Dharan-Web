import fetchWithCredentials from './fetchWithCredentials'

export default async function deleteCity(city_id){
    const url = `/api/cities/delete`
    const response = await fetchWithCredentials('DELETE', url, {city_id})
    return response.ok;
}