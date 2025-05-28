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
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        // required
      />

      {error && (
        <div style={{ color: "red", fontSize: "0.8rem" }}> {error}</div>
      )}
    </div>
  );
};

export default InputField;
