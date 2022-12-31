import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

const calculateMargin = (selfIndex, slideIndex, speed = 50) => {
    const diff = selfIndex - slideIndex;
    if (Math.abs(diff) > 1) return 0;
    return `${diff * speed}%`;
};

