import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
    const location = useLocation();
    const { name, team } = location.state || { name: '사용자', team: '팀' };
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="welcome-container">
            <h1>Welcome, {name}({team})!</h1>
            <div className="menu-container">
                <div className="menu-item" onClick={() => handleNavigation('/purchase-management')}>
                    <div className="icon">★</div>
                    <div className="label">구매관리</div>
                </div>
                <div className="menu-item" onClick={() => handleNavigation('/material-management')}>
                    <div className="icon">⬢</div>
                    <div className="label">자재관리</div>
                </div>
                <div className="menu-item" onClick={() => handleNavigation('/quality-management')}>
                    <div className="icon">▲</div>
                    <div className="label">품질관리</div>
                </div>
                <div className="menu-item" onClick={() => handleNavigation('/production-management')}>
                    <div className="icon">◆</div>
                    <div className="label">생산관리</div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
