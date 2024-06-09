import React from 'react';
import './MaterialManagement.css';

function MaterialManagement() {
    return (
        <div className="management-container">
            <h1>재고관리</h1>
            <ul>
                <li>재고 현황</li>
                <li>사용용 조회</li>
                <li>위치조회/관리</li>
                <li>폐기 관리</li>
            </ul>
        </div>
    );
}

export default MaterialManagement;
