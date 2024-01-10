import React from 'react';
import {
  // eslint-disable-next-line import/named
  CurrentTimeIndicator,
  CurrentTimeBox,
  CurrentTimeContent,
} from '@nessprim/planby-pro';

export const LiveTime = ({
  isBaseTimeFormat,
  time,
  styles,
}: CurrentTimeIndicator) => {
  return (
    <CurrentTimeBox {...styles.position}>
      <CurrentTimeContent
        isBaseTimeFormat={isBaseTimeFormat}
        style={{ color: "red" }}
      >
        {time}
      </CurrentTimeContent>
    </CurrentTimeBox>
  );
}
