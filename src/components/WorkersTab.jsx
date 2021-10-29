import React from "react";
import "./../styles/styles.css";

const WorkersTab = ({ data, sum }) => {
  return (
    <div className="tbl-content">
      <h2>Workers</h2>

      <table cellpadding="0" cellspacing="0" border="0">
        {data.map((i, index) => {
          return (
            <tr key={i.id}>
              <td>{index + 1}</td>
              <td>{i.firstName}</td>
              <td>{i.lastName}</td>
              <td>{i.department}</td>
              <td>{i.salary + " " + i.currency}</td>
            </tr>
          );
        })}

        {sum}
      </table>
    </div>
  );
};

export default WorkersTab;
