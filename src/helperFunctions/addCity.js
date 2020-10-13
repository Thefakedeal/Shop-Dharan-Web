import fetchWithCredentials from './fetchWithCredentials'

export default  async function addCity(city_name){
    const url = `/api/cities/add`
    const response = await fetchWithCredentials('POST',url,{city_name})
    return response.ok;
}