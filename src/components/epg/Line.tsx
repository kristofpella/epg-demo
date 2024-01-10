import React from 'react'
// eslint-disable-next-line import/named
import { Line as ILine } from '@nessprim/planby-pro';

export const Line = ({ styles }: ILine) => {
  return (
    <div
      style={{
        ...styles.position,
        background: "red",
        pointerEvents: "none",
      }}
    />
  );
}