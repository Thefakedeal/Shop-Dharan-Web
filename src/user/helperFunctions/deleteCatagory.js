import fetchWithCredentials from './fetchWithCredentials'

export default async function deleteCity(catagory_id){
    const url = `/api/catagories/delete`
    const response = await fetchWithCredentials('DELETE', url, {catagory_id})
    return response.ok;
}