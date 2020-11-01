import React, { Suspense } from "react";
import LoadingScreen from "../components/LoadingScreen";
const UserComponent = React.lazy(() => import("../user/App"));

export default function Admin() {
  return (
    <Suspense fallback={() => <LoadingScreen />}>
      <UserComponent />
    </Suspense>
  );
}