import React, { useState, useEffect, useCallback } from 'react';

import { HomeTopBar } from '../components/layout/'
import { getTomorrow } from '@src/helpers';
import { fetchEpg } from '@src/services';
import { ChannelItem } from '@src/types/ChannelItem';
import { EPG } from '@src/components/epg/EPG';


export function Home() {
    const [channels, setChannels] = useState<ChannelItem[]>();

    const handleFetchChannels = useCallback(async () => {
        const fetchedChannels = await fetchEpg();
    
        setChannels(fetchedChannels)
    }, []);

    useEffect(() => {
        handleFetchChannels();
    }, [])

    if (!channels) {
        return null
    }

    return (
        <>
            <HomeTopBar />
            <EPG start={new Date()} end={getTomorrow()} channels={channels} />
        </>
    );
}
