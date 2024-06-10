import React from 'react';
import { useLocation } from 'react-router-dom';
import SideMenu from './SideMenu';
import './Management.css';

function Management() {
    const location = useLocation();
    const { name, team } = location.state || { name: '사용자', team: '팀' };

    const path = location.pathname;
    let managementType;
    switch (path) {
        case '/purchase-management':
            managementType = '구매관리';
            break;
        case '/material-management':
            managementType = '자재관리';
            break;
        case '/quality-management':
            managementType = '품질관리';
            break;
        case '/production-management':
            managementType = '생산관리';
            break;
        default:
            managementType = '관리';
    }

    return (
        <div className="management">
            <SideMenu />
            <div className="content">
                <h1>{managementType}</h1>
                <p>여기에 {managementType} 관련 내용을 표시합니다.</p>
            </div>
        </div>
    );
}

export default Management;
