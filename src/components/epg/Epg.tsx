import React from 'react';
import { Epg, Layout } from '@nessprim/planby-pro';

import { useEpgData } from '../../hooks/';
import { ChannelItem } from './ChannelItem';
import { Program } from './ProgramItem';
import { Timeline } from './Timeline';
import { Line } from './Line';
import { LiveTime } from './LiveTime';

import './Epg.css';

export const EPG = () => {
  const { isLoading, getEpgProps, getLayoutProps, onScrollToNow } = useEpgData();

  return (
    <div className="epgContainer">
        <Epg isLoading={isLoading} {...getEpgProps()}>
            <Layout
                {...getLayoutProps()}
                renderLine={(props) => <Line {...props} />}
                renderCurrentTime={(props) => <LiveTime {...props} />}
                renderTimeline={(props) => <Timeline {...props} />}
                renderProgram={({ program, ...rest }) => (
                    <Program key={program.data.id} program={program} {...rest} />
                )}
                renderChannel={({ channel, ...rest }) => (
                    <ChannelItem key={channel.uuid} channel={channel} {...rest} />
                )}
            />
        </Epg>
        <button className="nowButton" onClick={onScrollToNow}>now</button>
    </div>
  );
}
