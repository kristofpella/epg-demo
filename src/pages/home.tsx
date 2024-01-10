import React from 'react';

import { HomeTopBar } from '../components/layout/'
import { EPG } from '../components/epg';


export function Home() {
  return (
        <>
            <HomeTopBar />
            <EPG />
        </>
    );
}
