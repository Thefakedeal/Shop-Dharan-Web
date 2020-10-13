import React from "react";
import { useHistory } from "react-router-dom";
import fetchWithCredentials from '../helperFunctions/fetchWithCredentials'
import { SupplierInfo, useLoading, useError, useSupplier} from "../contexts/SupplierInfo";
import DisplayLoading from "../components/DisplayLoading";
import DisplayErrors from "../components/DisplayErrors";
import SupplierForm from "../components/SupplierForm";
import CancelAndOkButton from "../components/CancelAndOkButton";

export default function DisplaySupplier({ supplier_id }) {
  return (
    <SupplierInfo supplier_id={supplier_id}>
      <Container supplier_id={supplier_id} />
    </SupplierInfo>
  );
}

function Container({supplier_id}) {
  const history = useHistory();
  const {state} = useSupplier()
  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are You Sure You Want To Delete this Account?"
    );
    if (!confirmed) return;
    const url = `/api/suppliers/delete`;
    const data = { supplier_id };
    const response = await fetchWithCredentials("DELETE", url, data);
    if (response.ok) {
      alert("Supplier Deleted");
      history.goBack();
      return;
    }
    alert("Failed To Delete");
  };

  const handleUpdate = async () => {
    const confirmed = window.confirm("Are You Sure You Want To Update");
    if (!confirmed) return;
    const data = {
      ...state,
      supplier_id
    };
    const url = `/api/suppliers/update`;
    const response = await fetchWithCredentials("PUT", url, data);
    if (response.ok) {
      alert("Supplier Updated");
      return;
    }
    alert("Failed To Update");
  };

  const { loading } = useLoading();
  const { err } = useError();
  if (loading) return <DisplayLoading loading={true} />;
  if (err) return <DisplayErrors errors={[err]} />;
  return (
    <>
      <SupplierForm supplier_id={supplier_id}/>
      <CancelAndOkButton okLabel="Update" cancelLabel="Delete" 
        onClickOk={handleUpdate} onClickCancel={handleDelete}
      />
    </>
  );
}
