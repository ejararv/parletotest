import React from "react";

const SumSalaries = ({ data, currency }) => {
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
};

export default SumSalaries;
