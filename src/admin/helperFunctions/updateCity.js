import fetchWithCredentials from './fetchWithCredentials'

export default async function updateCity(city_id, city_name){
    const url = '/api/cities/update'
    const response = await fetchWithCredentials('PUT',url,{city_id,city_name})
    return response.ok
}