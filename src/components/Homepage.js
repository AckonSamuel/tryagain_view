import React from 'react';
import Appbar from './Appbar';
import { useSelector } from 'react-redux';

export default function Homepage () {

    return(
        <>
        <Appbar />
        <div>Hello there! Welcome to the home page</div>
        </>
    )
};
