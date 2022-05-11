import React from "react";
import Button from "react-bootstrap/esm/Button";

const Booking = (props) => {
  const { name, time, status } = props.booking;
  // console.log(name, time, status);
  // const name = "customer name";
  // const status = "upcoming";
  // const time = "11:30";

  const setStatus = (status) => {
    if (status === "pending") return "bg-success";
    if (status === "completed") return "bg-primary";
    if (status === "cancelled") return "bg-danger";
  };

  return (
    <tr>
      <td className="text-center">{time}pm</td>
      <td>{name}</td>
      <td className="text-center p-2">
        <span className={`badge rounded-pill p-2 ${setStatus(status)}`}>
          {" "}
          {status}
        </span>
      </td>
      <td className="p-2">
        {<Button className="btn-sm btn-secondary w-100">Edit</Button>}
      </td>
      {}
    </tr>
  );
};

export default Booking;
