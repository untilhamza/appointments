import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import moment from "moment";
import { Form, Button } from "react-bootstrap";
import { DatePicker } from "antd";
import TimeSelector from "./TimeSelector";

import "./BookingForm.css";
const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

const schema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  phone: yup
    .string()
    .min(8, "*Enter a valid phone number")
    .matches(phoneRegex, "*Enter a valid phone number!")
    .required("*Phone number is required!"),
  date: yup.string().required(),
  time: yup.string().required("*Booking time is required"),
});

const BookingForm = ({ onCancel, onConfirm, oldData }) => {
  const disablePastDates = (submittedValue) => {
    if (!submittedValue) {
      return false;
    }
    return (
      submittedValue.valueOf() < Date.now() ||
      submittedValue.valueOf() >= moment().add(1, "month")
    );
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        //submitting data!
        onConfirm(values);
        resetForm();
      }}
      initialValues={{
        name: "",
        phone: "",
        date: moment(),
        time: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        isValid,
        errors,
        setFieldValue,
      }) => (
        <Form
          noValidate
          //   validated={!errors}
          onSubmit={handleSubmit}
          className="appointmentForm mx-auto p-3 "
        >
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              isValid={touched.name && !errors.name}
            />
            <div className="text-danger font-italic">
              <ErrorMessage name="name" />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="phone number"
              value={values.phone}
              onChange={handleChange}
              isValid={touched.phone && !errors.phone}
            />
            <div className="text-danger font-italic">
              <ErrorMessage name="phone" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <div>
              <DatePicker
                value={values.date}
                onChange={(enteredMoment) => {
                  setFieldValue("date", enteredMoment);
                }}
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
                choosenDate={values.date}
                time={values.time}
                onChange={(time) => {
                  setFieldValue("time", time);
                }}
              />
            </div>
            <div className="text-danger font-italic">
              <ErrorMessage name="time" />
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
              onClick={() => onCancel()}
            >
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
