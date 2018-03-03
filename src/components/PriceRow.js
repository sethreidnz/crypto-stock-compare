import React from "react";

export const PriceRow = ({ dayData }) => {
  const arrowClass = `arrow-${dayData.change > 0 ? "up" : "down"}`;
  return (
    <tr key={dayData.date}>
      <td>{dayData.date}</td>
      <td>{dayData.open}</td>
      <td>{dayData.low}</td>
      <td>{dayData.high}</td>
      <td>
        <span className={arrowClass} />
        {dayData.change}%
      </td>
    </tr>
  )
};
