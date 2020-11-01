import useFetchWithAuth from './useFetchWithAuth'

export default function useFetchNewOrder({page_number, order}){
    const url = `/api/supplier/orders/getold?page_number=${page_number}&order=${order}`;
    const { loading, err, result } = useFetchWithAuth(url);
    return {loading, err, result}
}