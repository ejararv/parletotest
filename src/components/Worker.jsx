import React from "react";
import "./../styles/styles.css";

const Worker = ({ id, firstName, lastName, department, salary, currency }) => {
  return (
    <>
      <tbody key={id}>
        <tr>
          <td>{id}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{department}</td>
          <td>{salary + " " + currency}</td>
        </tr>
      </tbody>
    </>
  );
};

export default Worker;
