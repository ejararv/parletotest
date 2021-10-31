import React from "react";
import classes from "./MySelect.module.css";

const MySelect = ({ options, defaultValue, value, onChange, ...props }) => {
  return (
    <select
      {...props}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={classes.select}
    >
      <option disabled className={classes.option} value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className={classes.option}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
