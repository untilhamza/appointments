import React from "react";
import PhoneForm from "../components/PhoneForm";
import { useHistory } from "react-router-dom";
import useHttp, { STATUS_COMPLETED, STATUS_PENDING } from "../hooks/useHttp";
import { httpCheckBooking } from "../hooks/request";
import SimpleBackdrop from "../components/BackDrop";
import { Modal } from "antd";

const CheckAppointment = () => {
  //we must try to get the id
  // if we get nothing we show a modal saying we found nothing
  // if we get the data we show it using the appointments commponent
  const history = useHistory();
  const {
    status,
    data: response,
    error,
    sendRequest,
  } = useHttp(httpCheckBooking);

  function handleChecking(phone) {
    sendRequest(phone);
  }

  function handleCancel() {
    history.goBack();
  }
  function modalError(message) {
    Modal.error({
      title: "An Error occurred",
      content: message ? message : "There was an error",
    });
  }

  if (error) {
    console.log(error);
    modalError(error);
    // return <div>{error} didnot find the appointment</div>;
  }

  if (status === STATUS_COMPLETED) {
    //navigate away
    console.log(response);
    return (
      <>
        <div>{JSON.stringify(response)}</div>
      </>
    );
    // history.push("/response");
    // return <div>{error} didnot find the appointment</div>;
  }

  return (
    <div>
      <SimpleBackdrop loading={status === STATUS_PENDING} />
      <PhoneForm onConfirm={handleChecking} onCancel={handleCancel} />
    </div>
  );
};

export default CheckAppointment;
