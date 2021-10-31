import React from "react";
import "./../styles/styles.css";
import Worker from "./Worker";

const WorkersTab = ({ data, sum }) => {
  return (
    <div className="tbl-content">
      <table cellPadding="0" cellSpacing="0" border="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        {data.map((i, index) => {
          return (
            <Worker
              id={index + 1}
              firstName={i.firstName}
              lastName={i.lastName}
              department={i.department}
              currency={i.currency}
              salary={i.salary}
            />
          );
        })}
        {sum}
      </table>
    </div>
  );
};

export default WorkersTab;
