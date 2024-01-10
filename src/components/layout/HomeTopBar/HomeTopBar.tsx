import React from 'react';
import { Search, AccountCircle } from '@mui/icons-material';

import './HomeTopBar.css'

export const HomeTopBar = () => {
    return (
        <div className="homeTopBar">
            <AccountCircle />
            <Search />
        </div>
    )
}
