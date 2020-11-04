import fetchWithCredentials from '../helperFunctions/fetchWithCredentials'

export default async function deleteAddress(address_id){
    const method = 'DELETE'
    const url = `/api/user/address/delete`
    const response = await fetchWithCredentials(method,url , {address_id})
    return response.ok
}