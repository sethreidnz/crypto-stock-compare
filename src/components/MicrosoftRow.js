import React from 'react';
import { getMicrosoftData } from '../api';

const microsoftData = getMicrosoftData();

export const MicrosoftRow = () => (
  microsoftData.map(dayData => (
    <tr>
        <td>{dayData.date}</td>
        <td>{dayData.open}</td>
        <td>{dayData.low}</td>
        <td>{dayData.high}</td>
        <td><span className={`arrow-${dayData.change}`}></span></td>
    </tr>
  ))
)