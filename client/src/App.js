import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Customers from './components/Customers';
import Welcome from './components/Welcome';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/welcome" element={<Welcome />} />
        </Routes>
    );
}

export default App;
