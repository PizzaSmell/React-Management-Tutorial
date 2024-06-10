import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import PurchaseManagement from './components/PurchaseManagement'; // 구매관리 페이지 import

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/purchase-management" element={<PurchaseManagement />} /> {/* 구매관리 경로 추가 */}
        </Routes>
    );
}

export default App;
