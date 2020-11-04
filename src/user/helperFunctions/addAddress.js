import fetchWithCredentials from './fetchWithCredentials'

export default async function addAddress({city_id,street_name,details}){
    const data = {city_id,street_name,details}
    const url = `/api/user/address/add`;
    const method = "POST";
    const response = await fetchWithCredentials(method, url, data);
    if (!response.ok) throw (await response.text()) || "Something Went Wrong";
    return response.ok;
}