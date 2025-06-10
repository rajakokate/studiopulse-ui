import React from "react";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${error ? "border-red-500": "border-gray-300"}`}
        // required
      />

      {error && (
        <p className="text-sm  text-red-500 mt-1"> {error}</p>
      )}
    </div>
  );
};

export default InputField;
