import React from "react";
import BookingForm from "../components/BookingForm";
import { useHistory } from "react-router-dom";

import useHttp, { STATUS_COMPLETED, STATUS_PENDING } from "../hooks/useHttp";
import { httpSubmitBooking } from "../hooks/request";
import SimpleBackdrop from "../components/BackDrop";

const NewBooking = () => {
  const {
    status,
    data: response,
    error,
    sendRequest,
  } = useHttp(httpSubmitBooking);

  const history = useHistory();
  function handleCancel() {
    history.goBack();
  }

  async function handleConfirm(bookingData) {
    sendRequest(bookingData);
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (status === STATUS_COMPLETED) {
    //navigate to the see appointment page with the made appointment..
    //may be show some status of the appointment..
    history.push(`/appointment/${response}`);
    console.log(response);
    return;
  }

  return (
    <div>
      {status === STATUS_PENDING && "Loading..."}
      <SimpleBackdrop loading={status === STATUS_PENDING} />
      <BookingForm onConfirm={handleConfirm} onCancel={handleCancel} />
    </div>
  );
};

export default NewBooking;
