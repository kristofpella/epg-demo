import React, { FC } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { BottomNav } from '../components/layout/';
import { Home } from '../pages/home';
import { Asset } from '../pages/asset';

import './App.css';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});


export const App: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/asset" element={<Asset />} />
            </Routes>
            <BottomNav/>
        </BrowserRouter>
    </ThemeProvider>
  );
};
