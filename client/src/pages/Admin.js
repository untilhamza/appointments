import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import useHttp, { STATUS_COMPLETED, STATUS_PENDING } from "../hooks/useHttp";
import moment from "moment";
import { httpGetBookings } from "../hooks/request";

const Admin = () => {
  const [date, setDate] = useState(moment());
  const {
    status,
    data: bookings,
    error,
    sendRequest,
  } = useHttp(httpGetBookings, true);

  const handleSelectDate = (newDate) => {
    console.log(newDate);
    setDate(newDate);
  };

  useEffect(() => {
    sendRequest(date.format("DD-MM-YYYY"));
    return () => {
      //try to abort the request maybe!
    };
  }, [date, sendRequest]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Dashboard
        date={date}
        onSelectDate={handleSelectDate}
        bookings={bookings}
        status={status}
      />
    </div>
  );
};

export default Admin;
