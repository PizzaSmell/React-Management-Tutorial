import React from 'react';
import SideMenu from './SideMenu';
import './Management.css';

function MaterialManagement() {
    return (
        <div className="management-container">
            <SideMenu />
            <div className="content">
                <h2>재 고 관 리</h2>
                <ul>
                    <li>재고 현황</li>
                    <li>사용량 조회</li>
                    <li>위치조회/관리</li>
                    <li>폐기 관리</li>
                </ul>
            </div>
        </div>
    );
}

export default MaterialManagement;
