import React from 'react'
// eslint-disable-next-line import/named
import { Line as ILine } from '@nessprim/planby-pro';

import './Line.css';

export const Line = ({ styles }: ILine) => {
  return (
    <div style={{ ...styles.position }} className="line" />
  );
}