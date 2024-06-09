import React from 'react';
import './PurchaseManagement.css';

function PurchaseManagement() {
    return (
        <div className="management-container">
            <h1>구매관리</h1>
            <ul>
                <li>거래처</li>
                <li>발주 리스트</li>
                <li>입고 완료</li>
                <li>반품 관리</li>
                <li>이슈관리</li>
            </ul>
        </div>
    );
}

export default PurchaseManagement;
