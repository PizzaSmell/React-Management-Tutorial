import React from 'react';
import './QualityManagement.css';

function QualityManagement() {
    return (
        <div className="management-container">
            <h1>BOM관리</h1>
            <ul>
                <li>BOM 조회</li>
                <li>신규등록</li>
                <li>BOM수정</li>
                <li>수정이력관리</li>
            </ul>
        </div>
    );
}

export default QualityManagement;
