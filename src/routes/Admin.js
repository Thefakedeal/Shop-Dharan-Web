import React, { Suspense } from "react";
import LoadingScreen from "../components/LoadingScreen";
const AdminComponent = React.lazy(() => import("../admin/App"));

export default function Admin() {
  return (
    <Suspense fallback={() => <LoadingScreen />}>
      <AdminComponent />
    </Suspense>
  );
}
