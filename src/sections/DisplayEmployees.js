import React from "react";

import useFetchEmployees from "../hooks/useFetchEmployees";

import Loading from "../components/Loading";
import Errors from "../components/Errors";

import EmployeesTable from "../tables/EmployeesTable";

export default function DisplayEmployees() {
  const { err, loading, result } = useFetchEmployees();
  let errors = [];
  if(loading) return <Loading loading={loading} />
  if (err) {
    errors.push(err);
    return <Errors errors={errors} />
  }
  return (
      <EmployeesTable employees={result} />
  );
}
