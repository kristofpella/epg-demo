import { useCallback, useState, useMemo, useEffect } from 'react';
// eslint-disable-next-line import/named
import { Channel, Program, useEpg } from '@nessprim/planby-pro';

import { getToday, getTomorrow } from '../helpers';
import { fetchEpg } from '../services';

export function useEpgData() {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [epg, setEpg] = useState<Program[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const channelsData = useMemo(() => channels, [channels]);
  const epgData = useMemo(() => epg, [epg]);

  const { getEpgProps, getLayoutProps, onScrollToNow } = useEpg({
    channels: channelsData,
    epg: epgData,
    dayWidth: 7200 * 3,
    sidebarWidth: 100,
    itemHeight: 80,
    isSidebar: true,
    isTimeline: true,
    isLine: true,
    startDate: getToday(),
    endDate: getTomorrow(),
    isBaseTimeFormat: false,
    isVerticalMode: false,
    isCurrentTime: false,
  });

  const handleFetchResources = useCallback(async () => {
    setIsLoading(true);

    const epgData = await fetchEpg();

    const mappedChannels = epgData.map(channelItem => ({
        logo: channelItem.images.logo,
        uuid: channelItem.id
    }));

    const mappedEpg = epgData.flatMap((channelItem, channelItemIndex) => {
        const mappedSchedules = channelItem.schedules.map((schedule, scheduleItemIndex) => ({
            channelUuid: channelItem.id,
            description: schedule.title,
            id: `${schedule.id}-${channelItemIndex}-${scheduleItemIndex}`,
            image: channelItem.images.logo,
            since: schedule.start,
            till: schedule.end,
            title: schedule.title,
        }))
        
        return mappedSchedules;
    })

    setEpg(mappedEpg as Program[]);
    setChannels(mappedChannels as Channel[]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return { getEpgProps, getLayoutProps, isLoading, onScrollToNow };
}
