import React from "react";

const SelectField = ({ label, name, value, onChange, options }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange} required>
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
