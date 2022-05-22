import React from "react";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import "./PhoneForm.css";

const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

const PhoneForm = ({ onConfirm, onCancel }) => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: yup.object().shape({
      phone: yup
        .string()
        .min(8, "*Enter a valid phone number")
        .matches(phoneRegex, "*Enter a valid phone number!")
        .required("*Phone number is required!"),
    }),
    onSubmit: (values) => {
      //const REST_API_URL = "YOUR_REST_API_URL";
      //call method to login here
      onConfirm(values);

      //alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className="container p-4">
        <div className="card phone-card mx-auto">
          <div className="card-body">
            <h5 className="card-title">Enter Phone Number</h5>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group mb-3">
                {/* <label htmlFor="Phone">Phone</label> */}
                <input
                  type="tel"
                  name="phone"
                  className={"form-control"}
                  placeholder="Phone number"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <span className="help-block text-danger">
                    {formik.errors.phone}
                  </span>
                )}
              </div>
              <div className="d-flex justify-content-around ">
                <Button
                  variant="success"
                  type="submit"
                  className="w-100 me-1"
                  disabled={false}
                >
                  Confirm
                </Button>

                <Button
                  variant="danger"
                  type="button"
                  className="w-100 ms-1"
                  onClick={onCancel}
                >
                  Back
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneForm;
