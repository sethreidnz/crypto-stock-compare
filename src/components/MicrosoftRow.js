import React from "react";
import { getMicrosoftData } from "../api";

const microsoftData = getMicrosoftData();

export const MicrosoftRow = () =>
  microsoftData.map(dayData => {
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
    );
  });
