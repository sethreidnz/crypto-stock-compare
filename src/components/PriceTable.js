import React from "react";
import { PriceRow } from "./PriceRow";

export const PriceTable = ({ priceData }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Open</th>
        <th>Low</th>
        <th>High</th>
        <th>Change</th>
      </tr>
    </thead>
    <tbody>
      {priceData.map(dayData => (
        <PriceRow dayData={dayData} key={dayData.date} />
      ))}
    </tbody>
  </table>
);
