import React, { Suspense } from "react";
import LoadingScreen from "../components/LoadingScreen";
const SupplierComponent = React.lazy(() => import("../supplier/App"));

export default function Admin() {
  return (
    <Suspense fallback={() => <LoadingScreen />}>
      <SupplierComponent />
    </Suspense>
  );
}