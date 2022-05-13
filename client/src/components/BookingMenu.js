import React from "react";
import Button from "react-bootstrap/Button";

import "./BookingMenu.css";
const BookingMenu = () => {
  return (
    <div className="container">
      <h2>Booking Menu</h2>
      <div className="d-flex flex-column booking-menu">
        <div className="mb-2">
          <Button className="d-block w-75">Make new Appointment</Button>
        </div>
        <div className="mb-2">
          <Button className="d-block w-75">View made Appointment</Button>
        </div>
        <div className="mb-2 mt-3">
          <Button className="btn-secondary">Go Back</Button>
        </div>
      </div>
    </div>
  );
};

export default BookingMenu;
