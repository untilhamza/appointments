import React, { useState } from "react";
import BookingMenu from "../components/BookingMenu";

const BookingPage = () => {
  return (
    <div>
      <BookingMenu
        onMakeAppointment={() => {}}
        onViewAppointment={() => {}}
        onBack={() => {}}
      />
    </div>
  );
};

export default BookingPage;
