import React from "react";
import classes from "./MyInput.module.css";

const MyInput = (props) => {
  return <input {...props} required className={classes.input} />;
};

export default MyInput;
