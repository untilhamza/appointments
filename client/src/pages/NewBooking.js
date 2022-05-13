import React from "react";
import BookingForm from "../components/BookingForm";

const NewBooking = () => {
  return (
    <div>
      <BookingForm onConfirm={() => {}} onCancel={() => {}} />
    </div>
  );
};

export default NewBooking;
