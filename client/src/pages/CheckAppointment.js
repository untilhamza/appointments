import React from "react";
import PhoneForm from "../components/PhoneForm";
import { useHistory } from "react-router-dom";

const CheckAppointment = () => {
  const history = useHistory();
  function handleCancel() {
    history.goBack();
  }
  return (
    <div>
      <PhoneForm onConfirm={() => {}} onCancel={handleCancel} />
    </div>
  );
};

export default CheckAppointment;
