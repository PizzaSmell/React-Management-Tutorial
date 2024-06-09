import React from 'react';
import { useLocation } from 'react-router-dom';

function Customers() {
    const location = useLocation();
    console.log('Location state:', location.state);
    const { name, team } = location.state || { name: '', team: '' };

    return (
        <div>
            <h1>Welcome, {name}({team})!</h1>
        </div>
    );
}

export default Customers;
