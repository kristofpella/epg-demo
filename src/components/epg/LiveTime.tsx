import React from 'react';
import {
  // eslint-disable-next-line import/named
  CurrentTimeIndicator,
  CurrentTimeBox,
  CurrentTimeContent,
} from '@nessprim/planby-pro';

import './LiveTime.css';

export const LiveTime = ({
  isBaseTimeFormat,
  time,
  styles,
}: CurrentTimeIndicator) => {
  return (
    <CurrentTimeBox {...styles.position}>
      <CurrentTimeContent
        isBaseTimeFormat={isBaseTimeFormat}
        className='currentTimeContent'
      >
        {time}
      </CurrentTimeContent>
    </CurrentTimeBox>
  );
}
