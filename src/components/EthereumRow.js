import React from 'react';
import { getEthereumData } from '../api';

const ethereumData = getEthereumData();

export const EthereumRow = () => (
  ethereumData.map(dayData => (
    <tr>
        <td>{dayData.date}</td>
        <td>{dayData.open}</td>
        <td>{dayData.low}</td>
        <td>{dayData.high}</td>
        <td><span className={`arrow-${dayData.change}`}></span></td>
    </tr>
  ))
)