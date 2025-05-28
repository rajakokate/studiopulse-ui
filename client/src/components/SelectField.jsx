import React from "react";

const SelectField = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  options,
  error,
}) => {
  console.log(options);
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div style={{ color: "red", fontSize: "0.8rem" }}>{error}</div>}
    </div>
  );
};

export default SelectField;
