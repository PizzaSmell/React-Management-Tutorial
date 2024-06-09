import React from 'react';
import SideMenu from './SideMenu';
import './Management.css';

function PurchaseManagement() {
    return (
        <div className="management-container">
            <SideMenu />
            <div className="content">
                <h2>구매관리</h2>
                <ul>
                    <li>거래처</li>
                    <li>발주 리스트</li>
                    <li>입고 완료</li>
                    <li>반품 관리</li>
                    <li>이슈관리</li>
                </ul>
            </div>
        </div>
    );
}

export default PurchaseManagement;
