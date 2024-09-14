import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import RadioButton from "../components/RadioButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addContact, updateContact } from "../middleware/store";
import { nanoid } from "nanoid";
import { FaEdit, FaPaperPlane } from "react-icons/fa";

// Define radio button options for status
const radioItems = [
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
];

const CreateContact = ({ edit }: any) => {
  const { state } = useLocation(); // Get state from location (for editing)
  const dispatch = useDispatch(); // Dispatch function to trigger actions
  const navigate = useNavigate(); // Hook to navigate programmatically

  // State to hold form parameters
  const [params, setParams] = useState({
    firstName: "",
    lastName: "",
    status: "",
  });

  // State to hold validation errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    status: "",
  });

  // Effect to populate form fields with existing data when editing
  useEffect(() => {
    if (edit && state) {
      setParams({
        firstName: state.firstName || "",
        lastName: state.lastName || "",
        status: state.status || "",
      });
    }
  }, [edit, state]);

  // Handle input changes for text fields
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };

  // Handle changes for radio buttons
  const handleRadio = (e: any) => {
    setParams({ ...params, status: e.target.value });
  };

  // Validate form inputs
  const validate = () => {
    const newErrors: any = {};
    if (!params.firstName) newErrors.firstName = "First Name is required";
    if (!params.lastName) newErrors.lastName = "Last Name is required";
    if (!params.status) newErrors.status = "Status is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validate()) {
      if (edit) {
        // Update contact if in edit mode
        dispatch(updateContact({ ...params, id: state.id }));
      } else {
        // Add new contact if in create mode
        dispatch(addContact({ ...params, id: nanoid() }));
      }
      navigate("/contacts"); // Navigate to the contacts list page
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-start py-8 lg:py-12 px-4 lg:px-8 bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg lg:w-[600px] w-full lg:m-auto p-6">
        <h1 className="text-center text-2xl font-semibold text-primary mb-6">
          {edit ? "Edit Contact" : "Create Contact"}
        </h1>

        <div className="flex flex-col gap-6">
          {/* Input for First Name */}
          <Input
            label="First Name"
            placeholder="John"
            onChange={handleChange}
            value={params.firstName}
            name="firstName"
            error={errors.firstName}
            containerClass="mb-4"
          />

          {/* Input for Last Name */}
          <Input
            label="Last Name"
            placeholder="Hancock"
            onChange={handleChange}
            value={params.lastName}
            name="lastName"
            error={errors.lastName}
            containerClass="mb-4"
          />

          {/* Radio buttons for status */}
          <div className="flex items-center gap-4 mb-4">
            <p className="text-primary font-semibold text-lg">Status</p>

            <div className="flex gap-4">
              <RadioButton
                onChange={handleRadio}
                items={radioItems}
                defaultValue={edit ? state.status : params.status}
              />
            </div>
          </div>
          {errors.status && <p className="text-red-500 text-sm mb-4">{errors.status}</p>}

          {/* Submit or Update button */}
          <div className="flex justify-center">
            <Button
              onClick={handleSubmit}
              text={edit ? "Update" : "Submit"}
              width="w-full lg:w-auto"
              icon={edit ? <FaEdit className="w-5 h-5" /> : <FaPaperPlane className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContact;
