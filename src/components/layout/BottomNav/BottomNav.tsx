import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Home, LiveTv, ViewList, Replay, LocationOn } from '@mui/icons-material';

import './BottomNav.css';

enum MenuitemIndexes {
  LIVE_TV = 0,
  VIEW_LIST = 1,
  HOME = 2,
  REPLAY = 3,
  LOCATION = 4,
}

export const BottomNav = () =>  {
  const navigate = useNavigate();
  const [activeMenuItem, setActiveMenuItem] = useState(MenuitemIndexes.HOME);

  const getClassName = useCallback((index: MenuitemIndexes) => {
    if (index === activeMenuItem) {
      return 'active'
    }

    return null
  }, [activeMenuItem])

  const handleDefaultClick = (index: MenuitemIndexes) => {
    setActiveMenuItem(index);
  }

  const handleHomeClick = (index: MenuitemIndexes) => {
    setActiveMenuItem(index)
    navigate('/')
  }

  return (
    <div className="bottomNav">
       <LiveTv className={getClassName(0)} onClick={() => handleDefaultClick(MenuitemIndexes.LIVE_TV)} />
       <ViewList className={getClassName(1)} onClick={() => handleDefaultClick(MenuitemIndexes.VIEW_LIST)} />
       <Home className={getClassName(2)} onClick={() => handleHomeClick(MenuitemIndexes.HOME)} />
       <Replay className={getClassName(3)} onClick={() => handleDefaultClick(MenuitemIndexes.REPLAY)} />
       <LocationOn className={getClassName(4)} onClick={() => handleDefaultClick(MenuitemIndexes.LOCATION)} /> 
    </div>
  )
}
