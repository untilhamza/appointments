import React from "react";
import Button from "react-bootstrap/Button";
import useModal from "../hooks/useModal";
import "./Appointment.css";

const Appointment = () => {
  const handleDelete = () => {
    console.log("Deletion complete");
  };
  const handleModify = () => {
    console.log("Modifying...");
  };

  const { modal, handleShow } = useModal(
    "Confirmation",
    "Are you sure you want to delete this appointment?",
    handleDelete
  );
  return (
    <>
      {modal}
      <div className="container">
        <div className="appointment-card card mx-auto">
          <div className="card-body d-flex flex-column">
            <h5>Appointment details</h5>
            <div className="card-text">For : Hamza</div>
            <div className="card-text">Phone number : 010-9999-9999</div>
            <div className="card-text">Date : 22/04/2022</div>
            <div className="card-text">Time : 03:35pm</div>
            <div className="d-flex justify-content-around mt-3 ">
              <Button
                variant="success"
                type="button"
                className="w-100 me-1"
                onClick={() => {
                  handleModify();
                }}
              >
                Modify
              </Button>

              <Button
                variant="danger"
                type="button"
                className="w-100 ms-1"
                onClick={() => {
                  handleShow();
                }}
              >
                Delete
              </Button>
            </div>
            <div className="mb-2 mt-3">
              <Button className="btn-secondary">Go Back</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
