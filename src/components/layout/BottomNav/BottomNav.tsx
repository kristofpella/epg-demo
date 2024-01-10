import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Home, LiveTv, ViewList, Replay, LocationOn } from '@mui/icons-material';

import './BottomNav.css';

export const BottomNav = () =>  {
  const navigate = useNavigate();
  const [value, setValue] = useState(2);

  const getClassName = useCallback((index: number) => {
    if (index === value) {
      return 'active'
    }

    return null
  }, [value])

  const handleDefaultClick = (index: number) => {
    setValue(index);
  }

  const handleHomeClick = (index: number) => {
    setValue(index)
    navigate('/')
  }

  return (
    <div className="bottomNav">
       <LiveTv className={getClassName(0)} onClick={() => handleDefaultClick(0)} />
       <ViewList className={getClassName(1)} onClick={() => handleDefaultClick(1)} />
       <Home className={getClassName(2)} onClick={() => handleHomeClick(2)} />
       <Replay className={getClassName(3)} onClick={() => handleDefaultClick(3)} />
       <LocationOn className={getClassName(4)} onClick={() => handleDefaultClick(4)} /> 
    </div>
  )
}
