import React from 'react';
import './ProductionManagement.css';

function ProductionManagement() {
    return (
        <div className="management-container">
            <h1>생산관리</h1>
            <ul>
                <li>금일 생산(예정)</li>
                <li>진행 생산(완료)</li>
                <li>차주 생산 예정</li>
                <li>계획수량 계산</li>
            </ul>
        </div>
    );
}

export default ProductionManagement;
