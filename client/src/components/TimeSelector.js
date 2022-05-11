import React, { useState, useEffect, useCallback } from "react";
import { SLOTS } from "../data";
import "./TimeSelector.css";

import Button from "react-bootstrap/Button";

const TimeSelector = ({ choosenDate, onChange, time }) => {
  // const [userTime, setUserTime] = useState(time);
  //console.log("time is ", userTime);
  const handleTimeChange = (time) => {
    // setUserTime(time);
    onChange(time);
  };

  useEffect(() => {
    console.log("fetch slot data for ", choosenDate.format("dddd DD-MM-YYYY"));
  }, [choosenDate]);

  //console.log(choosenDate.toDate());

  //can put this in useEffect for choose time to pull slots for choosen date from the db
  //const timeSlots = useTime(props.choosenDate);

  const buttons = [];
  SLOTS.forEach((slot) =>
    buttons.push(
      <Button
        variant={`${
          slot.time === time
            ? "success"
            : slot.isBooked
            ? "secondary"
            : "primary"
        }`}
        disabled={slot.isBooked}
        key={slot.id}
        onClick={() => handleTimeChange(slot.time)}
      >
        {slot.time}pm
      </Button>
    )
  );

  return (
    <>
      <p className="">
        Select time slot for
        <span className="text-success font-weight-bold">
          {" " + choosenDate.format("dddd DD-MM-YYYY").toString()}
        </span>
      </p>
      <div className="container">{buttons}</div>
    </>
  );
};

export default TimeSelector;
