import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Customers from './components/Customers';
import Welcome from './components/Welcome';
import PurchaseManagement from './components/PurchaseManagement';
import MaterialManagement from './components/MaterialManagement';
import QualityManagement from './components/QualityManagement';
import ProductionManagement from './components/ProductionManagement';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/purchase-management" element={<PurchaseManagement />} />
            <Route path="/material-management" element={<MaterialManagement />} />
            <Route path="/quality-management" element={<QualityManagement />} />
            <Route path="/production-management" element={<ProductionManagement />} />
        </Routes>
    );
}

export default App;
