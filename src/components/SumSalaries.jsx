import React from "react";

const SumSalaries = ({ data, currency }) => {
  if (data.length) {
    return (
      <tfoot>
        <tr>
          <td colSpan="3"></td>
          <td>Summary</td>
          <td style={{ background: "#25c481" }}>
            {data
              .map((i) => i.salary)
              .reduce((a, b) => Number(a) + Number(b))
              .toString()}{" "}
            {currency}
          </td>
        </tr>
      </tfoot>
    );
  }
  return <h1>No results found</h1>;
};

export default SumSalaries;
