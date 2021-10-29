import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children, visible, setVisible }) => {
  const cssClasses = [classes.modal];

  if (visible) {
    cssClasses.push(classes.active);
  }
  return (
    <div className={cssClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.modal_context}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
