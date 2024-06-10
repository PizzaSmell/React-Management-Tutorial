import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Management from './components/Management';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/purchase-management" element={<Management />} />
                <Route path="/material-management" element={<Management />} />
                <Route path="/quality-management" element={<Management />} />
                <Route path="/production-management" element={<Management />} />
            </Routes>
        </Router>
    );
}

export default App;
