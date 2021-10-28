import React from "react";

const WorkersTab = ({ data, sum }) => {
  return (
    <div>
      <div>
        <h2>Workers</h2>
        <table border="1">
          <tbody>
            {data.map((i) => {
              return (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.firstName}</td>
                  <td>{i.lastName}</td>
                  <td>{i.departament}</td>
                  <td>{i.salary + " " + i.currency}</td>
                </tr>
              );
            })}
          </tbody>
          {sum}
        </table>
      </div>
    </div>
  );
};

export default WorkersTab;
