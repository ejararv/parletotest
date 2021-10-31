import React from "react";
import classes from "./MyInput.module.css";

const MyInput = (props) => {
  return (
    <input
      {...props}
      type="text"
      className={classes.input}
      placeholder="Type to Search..."
    />
  );
};

export default MyInput;
