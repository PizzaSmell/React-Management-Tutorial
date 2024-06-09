import React from 'react';
import SideMenu from './SideMenu';
import './Management.css';

function QualityManagement() {
    return (
        <div className="management-container">
            <SideMenu />
            <div className="content">
                <h2>BOM 관리</h2>
                <ul>
                    <li>BOM 조회</li>
                    <li>신규등록</li>
                    <li>BOM수정</li>
                    <li>수정이력관리</li>
                </ul>
            </div>
        </div>
    );
}

export default QualityManagement;
