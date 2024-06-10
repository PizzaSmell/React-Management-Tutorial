import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PurchaseManagement from './components/PurchaseManagement';
import MaterialManagement from './components/MaterialManagement';
import QualityManagement from './components/QualityManagement';
import ProductionManagement from './components/ProductionManagement';
import Welcome from './components/Welcome';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/purchase-management" element={<Layout />}>
                    <Route index element={<PurchaseManagement />} />
                </Route>
                <Route path="/material-management" element={<Layout />}>
                    <Route index element={<MaterialManagement />} />
                </Route>
                <Route path="/quality-management" element={<Layout />}>
                    <Route index element={<QualityManagement />} />
                </Route>
                <Route path="/production-management" element={<Layout />}>
                    <Route index element={<ProductionManagement />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
