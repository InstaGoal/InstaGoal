"use client";
import React from "react";
import Select from "react-select";

interface GlobalSelectProps{
  options: Array<object>;
  isMulti?: boolean;
  onChange?: any;
  isOptionDisabled?: any;
}
  
export default function GlobalSelect({options, isMulti, onChange, isOptionDisabled}: GlobalSelectProps) {

  const selectStyle = {
    control: () => ({
      backgroundColor: "transparent",
      border: "1px solid rgba(180, 180, 180, 1)",
      borderRadius: "4px",
      width: "100%",
      display: "flex",
      minHeight: "56px",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: "rgba(180, 180, 180, 1)",
    }),
    indicatorSeparator: () => ({ display: "none" }), 
    multiValueRemove: (styles: any) => ({
      ...styles,
      ':hover': {
        backgroundColor: "white",
      },
    }),

  };

  return (
    <Select
      defaultValue={options[0]}
      styles={selectStyle}
      options={options}
      isMulti={isMulti}
      onChange={onChange}
      isOptionDisabled={isOptionDisabled}
    ></Select>
  );
}
