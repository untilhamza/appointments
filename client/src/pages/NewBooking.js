import React from "react";
import BookingForm from "../components/BookingForm";
import { useHistory } from "react-router-dom";

const NewBooking = () => {
  const history = useHistory();
  function handleCancel() {
    history.goBack();
  }
  return (
    <div>
      <BookingForm onConfirm={() => {}} onCancel={handleCancel} />
    </div>
  );
};

export default NewBooking;
