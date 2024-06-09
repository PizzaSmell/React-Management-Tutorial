import React from 'react';
import SideMenu from './SideMenu';
import './Management.css';

function ProductionManagement() {
    return (
        <div className="management-container">
            <SideMenu />
            <div className="content">
                <h2>생산 관리</h2>
                <ul>
                    <li>금일 생산(예정)</li>
                    <li>진행 생산(완료)</li>
                    <li>차주 생산 예정</li>
                    <li>계획수량 계산</li>
                </ul>
            </div>
        </div>
    );
}

export default ProductionManagement;
