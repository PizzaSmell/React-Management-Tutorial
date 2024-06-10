import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="welcome-container">
            <div className="box" onClick={() => handleNavigation('/purchase-management')}>구매관리</div>
            <div className="box" onClick={() => handleNavigation('/material-management')}>자재관리</div>
            <div className="box" onClick={() => handleNavigation('/quality-management')}>품질관리</div>
            <div className="box" onClick={() => handleNavigation('/production-management')}>생산관리</div>
        </div>
    );
}

export default Welcome;
