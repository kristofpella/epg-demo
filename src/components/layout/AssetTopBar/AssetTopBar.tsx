import React from 'react';
import { Search, ChevronLeft } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import './AssetTopBar.css'

export const AssetTopBar = () => {
    const navigate = useNavigate();

    return (
        <div className="assetTopBar">
            <ChevronLeft onClick={() => navigate('/')} />
            <Search />
        </div>
    )
}
