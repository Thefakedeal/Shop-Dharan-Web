import React from "react";

import Loading from "../components/Loading";
import Errors from "../components/Errors";

import SuppliersTable from "../tables/SuppliersTable";

import useFetchSuppliers from "../hooks/useFetchSuppliers";

import { useSupplierParams } from "../contexts/SupplierSearchParams";

export default function DisplaySuppliers() {
  const { state } = useSupplierParams();
  const { err, loading, result } = useFetchSuppliers(state);
  const errors = [];
  if (loading) return <Loading loading={loading} />;
  if (err) {
    errors.push(err);
    return <Errors err={errors} />;
  }
  return <SuppliersTable suppliers={result} />;
}
