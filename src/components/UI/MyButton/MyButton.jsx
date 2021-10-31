import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
  const cssClasses = [classes.custom_btn, classes.btn];
  return (
    <>
      <button {...props} className={cssClasses.join(" ")}>
        {children}
      </button>
    </>
  );
};

export default MyButton;
