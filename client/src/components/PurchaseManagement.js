import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Management.css';

function PurchaseManagement() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="management-container">
            <div className="header">
                <div className="header-left">
                    <h1>구매관리</h1>
                </div>
                <div className="header-right">
                    <span>진경민(자재)님 접속!</span>
                    <button onClick={handleLogout}>로그아웃</button>
                </div>
            </div>
            <div className="sidebar">
                <ul>
                    <li>거래처</li>
                    <li>발주 리스트</li>
                    <li>입고 완료</li>
                    <li>반품 관리</li>
                    <li>이슈 관리</li>
                </ul>
            </div>
            <div className="content">
                {/* 이 부분에 구매관리 페이지의 컨텐츠를 추가합니다 */}
            </div>
        </div>
    );
}

export default PurchaseManagement;
