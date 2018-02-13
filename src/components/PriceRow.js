import React from "react";

export const PriceRow = ({rowData}) => {
  const arrowClass = `arrow-${rowData.change > 0 ? "up" : "down"}`;
    return (
      <tr>
        <td>{rowData.date}</td>
        <td>{rowData.open}</td>
        <td>{rowData.low}</td>
        <td>{rowData.high}</td>
        <td>
          <span className={arrowClass} />
          {rowData.change}%
        </td>
      </tr>
    );
};
