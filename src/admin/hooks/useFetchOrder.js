import useFetchWithAuth from './useFetchWithAuth'

export default function useFetchOrder({order_id}) {
    const url = `/api/admin/orders/get?order_id=${order_id}`
    const {err,loading,result} = useFetchWithAuth("GET", url)
    return {err,loading, result}
}
