import fetchWithCredentials from './fetchWithCredentials'

export default async function updateCity(catagory_id, catagory_name){
    const url = '/api/catagories/update'
    const response = await fetchWithCredentials('PUT',url,{catagory_id,catagory_name})
    return response.ok
}