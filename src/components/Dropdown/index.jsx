import React from "react";
import Select from "react-select";

const Dropdown = ({
  options,
  onChange,
  placeholder,
  defaultValue,
  className,
}) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "0.375rem",
      padding: "0.25rem",
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      border: "2px solid #e5e7eb",
      textAlign: "left",
      "&:hover": {
        border: "2px solid #6b7280",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused || state.isSelected ? "#6B7280" : "#fff",
      color: state.isFocused || state.isSelected ? "#fff" : "#374151",
      padding: "0.5rem 1rem",
      textAlign: "left",
      "&:active": {
        backgroundColor: "#e5e7eb",
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.375rem",
      marginTop: "0.125rem",
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    }),
  };

  return (
    <Select
      options={options}
      value={defaultValue}
      styles={customStyles}
      placeholder={placeholder}
      onChange={onChange}
      isClearable
      className={`w-full ${className}`}
    />
  );
};

export default Dropdown;
