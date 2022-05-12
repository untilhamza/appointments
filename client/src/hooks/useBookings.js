import { useState, useCallback, useEffect } from "react";

import {
  httpGetBookings,
  httpDeleteBooking,
  httpEditBooking,
  httpSubmitBooking,
} from "./request";

const useBookings = () => {
  const [bookingDate, setBookingDate] = useState("");
  const [bookings, setBookings] = useState([]);
  const [isBookingLoading, setIsBookingLoading] = useState(false);

  //when we change the date, we should automatically get new bookings for that date
  //we have usecallback as we might change the date under useeffect
  const changeDate = useCallback((date) => {
    setBookingDate(date);
  }, []);

  const getBookings = useCallback(async (date) => {
    setIsBookingLoading(true);
    const bookings = await httpGetBookings(date);
    setBookings(bookings);
    setIsBookingLoading(false);
  }, []);

  useEffect(() => {
    if (bookingDate) {
      getBookings(bookingDate);
    }
  }, [getBookings, bookingDate]);

  const submitBooking = async (booking) => {
    setIsBookingLoading(true);
    httpSubmitBooking(booking);
    setIsBookingLoading(false);
  };

  const deleteBooking = async (id) => {
    isBookingLoading(true);
    const response = await httpDeleteBooking(id);

    //it the deleting is successful
    const success = response.ok;
    if (success) {
      getBookings();
    } else {
      console.log("failed to delete booking");
    }
    isBookingLoading(false);
  };

  const editBooking = async (id) => {
    isBookingLoading(true);
    const response = await httpEditBooking(id);

    //it the editing is successful
    const success = response.ok;
    if (success) {
      getBookings();
    } else {
      console.log("failed to delete booking");
    }
    isBookingLoading(false);
  };

  return {
    bookings,
    isBookingLoading,
    changeDate,
    deleteBooking,
    editBooking,
    submitBooking,
  };
};

export default useBookings;
