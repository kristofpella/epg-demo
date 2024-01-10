import { ChannelItem } from "../types/ChannelItem";

export const fetchEpg = async (): Promise<ChannelItem[]> => {
    const response = await fetch('http://localhost:1337/epg');
    const epg = await response.json();

    return epg.channels;
}
