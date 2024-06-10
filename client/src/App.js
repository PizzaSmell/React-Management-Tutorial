import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Layout from './components/Layout';
import PurchaseManagement from './components/PurchaseManagement';
import MaterialManagement from './components/MaterialManagement';
import QualityManagement from './components/QualityManagement';
import ProductionManagement from './components/ProductionManagement';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/purchase-management" element={<Layout><PurchaseManagement /></Layout>} />
                <Route path="/material-management" element={<Layout><MaterialManagement /></Layout>} />
                <Route path="/quality-management" element={<Layout><QualityManagement /></Layout>} />
                <Route path="/production-management" element={<Layout><ProductionManagement /></Layout>} />
            </Routes>
        </Router>
    );
}

export default App;
