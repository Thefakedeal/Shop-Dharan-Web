import useFetchWithAuth from './useFetchWithAuth'

export default function useFetchEmployees() {
    const { loading, err, result } = useFetchWithAuth("/api/employees/getall");

    return {err, loading, result}
}
