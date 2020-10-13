import useFetchWithAuth from './useFetchWithAuth'

export default function useFetchOrders({order_status, page_number=0, payed, order}) {
    
    const searchParams= new URLSearchParams()
    if(order_status) searchParams.append('order_status',order_status)
    if(page_number) searchParams.append('page_number', page_number)
    if(order) searchParams.append('order',order)
    const url = `/api/admin/orders/getall?${searchParams}`
    const {err,loading,result = []} = useFetchWithAuth("GET", url)
    return {err,loading ,result}
}
