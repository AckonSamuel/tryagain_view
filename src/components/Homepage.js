import React from 'react';
import Appbar from './Appbar';
import {createTheme} from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/styles';
import ParallaxCarousel from './carousel/ParallaxCarousel';
import SerratedTabs from './tabs/SerratedTabs';
import createEmotionCache from '../createEmotionCache';


export default function Homepage () {

    const cache = createEmotionCache();
    const theme = createTheme();
    return(
        <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
        <Appbar />
        <ParallaxCarousel />
        <SerratedTabs />
        </ThemeProvider>
        </CacheProvider>
    )
};
