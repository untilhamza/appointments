import React, { useState } from "react";
// import { Form, Input, Button } from "antd";
import moment from "moment";
import { Form, Button } from "react-bootstrap";
import { DatePicker } from "antd";
import TimeSelector from "./TimeSelector";

import "./BookingForm.css";

const BookingForm = () => {
  const [validated, setValidated] = useState(false);
  const [bookedDate, setBookedDate] = useState(moment());
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity === false) {
      event.stopPropagation();
      console.log("form submission failed");
      return;
    }
    setValidated(true);
    console.log("Form Success:");
  };
  const handleFormCancel = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleTimeChange = (newTime) => {
    console.log("the new set time is ", newTime);
    setTime(newTime);
  };

  const disablePastDates = (submittedValue) => {
    if (!submittedValue) {
      return false;
    }
    return (
      submittedValue.valueOf() < Date.now() ||
      submittedValue.valueOf() >= moment().add(1, "month")
    );
  };

  const handleDateChange = (momentDate, enteredDate) => {
    // console.log(enteredDate);
    // console.log(momentDate.toDate());
    // const date = new Date(momentDate.toDate());
    // console.log(date.toDateString());
    /// const bookedDate = date.toDateString();
    //choosenDate.format("YYYY-MM-DD").toString();
    setBookedDate(momentDate);
    handleTimeChange(null);
    // console.log(new Date(momentDate.toDate()));
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleFormSubmit}
      className="appointmentForm mt-5 mx-auto p-3"
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="customer"
          required
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          required
          placeholder="phone number"
          value={phone}
          onChange={handlePhoneChange}
        />
        <Form.Text className="text-muted">
          We dont share your information.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <div>
          <DatePicker
            value={bookedDate}
            onChange={handleDateChange}
            defaultPickerValue={moment()}
            disabledDate={disablePastDates}
            className="w-100"
          />
        </div>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label></Form.Label>
        <div>
          <TimeSelector
            choosenDate={bookedDate}
            time={time}
            onChange={handleTimeChange}
          />
        </div>
      </Form.Group>

      <div className="d-flex justify-content-around p-2">
        <Button
          variant="success"
          type="submit"
          className="w-100 me-1"
          disabled={false}
        >
          Confirm Booking
        </Button>

        <Button
          variant="danger"
          type="button"
          className="w-100 ms-1"
          onClick={handleFormCancel}
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default BookingForm;
