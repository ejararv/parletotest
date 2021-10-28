import React from "react";

const SumSalaries = ({ data, currency }) => {
  return (
    <tfoot>
      <tr>
        <td colSpan="3"></td>
        <td>Summary</td>
        <td>
          {data
            .map((i) => i.salary)
            .reduce((a, b) => a + b)
            .toString()}{" "}
          {currency}
        </td>
      </tr>
    </tfoot>
  );
};

export default SumSalaries;
