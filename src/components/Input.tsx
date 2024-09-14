import React from "react";

// Define the Input component with props for label, placeholder, onChange handler, value, name, and error message.
const Input = ({ label, placeholder, onChange, value, name, error }: any) => {
  return (
    <div className="flex flex-col">
      {/* Container for the label */}
      <div className="flex items-center justify-between">
        {/* Display the label with primary text color and medium font weight */}
        <p className="text-primary font-medium">{label}</p>
      </div>
      {/* Input field */}
      <input
        type="text" // Specifies that this is a text input field
        placeholder={placeholder} // Placeholder text for the input field
        onChange={onChange} // Event handler for when the input value changes
        value={value} // Value of the input field
        name={name} // Name attribute for the input field
        className={`outline-cyan p-3 lg:w-[280px] text-base border rounded placeholder:text-[#808080] ${
          error ? 'border-red-500' : 'border-secondary' // Conditional class for border color based on error
        }`}
      />
      {/* Display error message if error exists */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
