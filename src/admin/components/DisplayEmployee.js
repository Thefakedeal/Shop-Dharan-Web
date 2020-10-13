import React from "react";
import { useHistory } from "react-router-dom";


import {
  EmployeeInfo,
  useErrorContext,
  useLoadingContext,
  useEmployeeContext,
} from "../contexts/EmployeeInfo";

import CancelAndOkButton from "../components/CancelAndOkButton";
import DisplayLoading from "../components/DisplayLoading";
import DisplayErrors from "../components/DisplayErrors";
import EmployeeForm from "../components/EmployeeForm";
import fetchWithCredentials from "../helperFunctions/fetchWithCredentials";


export default function DisplayEmployee({ employee_id }) {
  return (
    <EmployeeInfo employee_id={employee_id}>
      <Wrapper employee_id={employee_id} />
    </EmployeeInfo>
  );
}

function Wrapper({ employee_id }) {
  const { loading } = useLoadingContext();
  const { err } = useErrorContext();
  const { state } = useEmployeeContext();
  const history = useHistory();

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are You Sure You Want To Delete this Account?"
    );
    if (!confirmed) return;
    const url = `/api/employees/delete`;
    const data = { employee_id };
    const response = await fetchWithCredentials("DELETE", url, data);
    if (response.ok) {
      alert("Employee Deleted");
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
      employee_id,
    };
    const url = `/api/employees/update`;
    const response = await fetchWithCredentials("PUT", url, data);
    if (response.ok) {
      alert("Employee Updated");
      return;
    }
    alert("Failed To Upload");
  };

  if (loading) return <DisplayLoading loading={true} />;
  if (err) return <DisplayErrors errors={[err]} />;

  return (
    <>
      <CancelAndOkButton
        onClickOk={handleUpdate}
        okLabel="Update"
        onClickCancel={handleDelete}
        cancelLabel="Delete"
      />
      <EmployeeForm />
    </>
  );
}
