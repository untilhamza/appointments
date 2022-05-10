import React from "react";

const TimeSelector = () => {
  //query time slots for a provided date
  //only show for time that are not taken
  const options = [
    "12:30",
    "01:10",
    "01:50",
    "02:30",
    "03:10",
    "03:50",
    "04:30",
    "05:10",
    "05:50",
    "06:30",
    "07:10",
    "07:50",
    "08:30",
    "09:10",
    "10:30",
  ].map((time) => <option value={time}>{`${time}pm`}</option>);
  return (
    <select
      onChange={(e) => {
        console.log(e.target.value);
      }}
    >
      {options}
    </select>
  );
};

const createTimes = (start: string, end: string, interval: number) => {};

export default TimeSelector;
