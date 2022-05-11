import React from "react";
import Booking from "./Booking";
import { BOOKINGS } from "../data";

const BookingTable = () => {
  return (
    <table className="table table-sm table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Time</th>
          <th scope="col">Customer Name</th>
          <th scope="col">Status</th>
          <th scope="col">Modify</th>
        </tr>
      </thead>
      <tbody>
        {BOOKINGS?.map((booking) => (
          <Booking key={booking.id} booking={booking} />
        ))}
      </tbody>
    </table>
  );
};

export default BookingTable;
