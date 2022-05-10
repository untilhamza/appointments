import React from "react";
// import { Form, Input, Button } from "antd";
import moment from "moment";
import { Form, Button } from "react-bootstrap";
import { DatePicker, TimePicker as TP } from "antd";
import TimePicker from "react-bootstrap-time-picker";

import TimeSelector from "./TimeSelector";

import "./Appointment.css";

const Appointment = () => {
  const startTime = "12:30";
  const closeTime = "23:00";
  const format = "HH:mm";
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  function onChange(date: any, dateString: any) {
    console.log(date, dateString);
  }
  return (
    <Form className="appointmentForm mt-5 mx-auto p-3">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="customer"
          placeholder="Enter your name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" name="phone" placeholder="phone number" />
        <Form.Text className="text-muted">
          We dont share your information.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <div>
          <DatePicker onChange={onChange} />
        </div>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Time</Form.Label>
        <div>
          <TimePicker start={startTime} end={closeTime} step={40} />
        </div>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Time</Form.Label>
        <div>
          <TP
            minuteStep={40}
            defaultValue={moment("12:08", format)}
            format={format}
            showNow={false}
            use12Hours={true}
            onChange={() => {}}
          />
        </div>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Time</Form.Label>
        <div>
          <TimeSelector />
        </div>
      </Form.Group>

      <div className="d-flex justify-content-start">
        <Button variant="primary" type="submit" className="me-3">
          Book
        </Button>

        <Button variant="danger" type="button">
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default Appointment;
