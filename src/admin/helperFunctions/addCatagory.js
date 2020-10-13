import fetchWithCredentials from './fetchWithCredentials'

export default  async function addCatagory(catagory_name){
    const url = `/api/catagories/add`
    const response = await fetchWithCredentials('POST',url,{catagory_name})
    return response.ok;
}