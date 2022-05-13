import { useState } from "react";
import BookingTable from "./BookingTable";
import Calendar from "./Calendar";
import moment from "moment";

const Dashboard = () => {
  const [date, setDate] = useState(moment());
  //console.log(date);
  const handleSelectDate = (newDate) => {
    console.log("new set date is", newDate);
    setDate(newDate);
  };
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col">
          <Calendar onSelectDate={handleSelectDate} />
        </div>
        <div className="col col-md-7 col-lg-8">
          <BookingTable date={date} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
