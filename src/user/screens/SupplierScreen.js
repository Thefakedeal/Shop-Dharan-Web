import React from 'react'
import LightScreen from '../components/LightScreen'
import DisplaySupplier from '../section/DisplaySupplier'

export default function SupplierScreen() {
    const { id } = useParams();
    const { err, loading, result } = useFetchSupplier({ supplier_id: id });
    if (loading) return <Loading loading={true} />;
    if (err) return <Errors errors={[err]} />;
    return (
        <LightScreen>
            <DisplaySupplier supplier={result} />
        </LightScreen>
    )
}
