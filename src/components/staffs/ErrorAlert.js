import React from 'react';
import { useSelector } from 'react-redux';

const MessageAlert = () => {
    const staff = useSelector(state => state.staff.staff);

    console.log(staff);
    return (
        <div>{staff ? <h1>{staff.role}</h1> : <h1>invalid credentials</h1>}</div>
    )
};

export default MessageAlert;