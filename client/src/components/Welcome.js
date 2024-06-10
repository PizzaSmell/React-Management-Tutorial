import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
    const location = useLocation();
    const { userid } = location.state || { userid: '' };
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({ name: '사용자', team: '팀' });

    // 컴포넌트가 마운트될 때 사용자 정보를 가져옵니다
    useEffect(() => {
        if (userid) {
            fetch(`/api/user-info?userid=${userid}`)
                .then(response => response.json())
                .then(data => setUserInfo({ name: data.name, team: data.team }))
                .catch(error => console.error('Error fetching user info:', error));
        }
    }, [userid]);

    // 페이지 네비게이션 함수
    const handleNavigation = (path) => {
        navigate(path, { state: { userid } });
    };

    return (
        <div className="welcome-page">
            <div className="welcome-text">
                <span className="welcome">Welcome, </span>
                <span className="user-info">{userInfo.name}({userInfo.team})님!</span>
            </div>
            <div className="welcome-container">
                <div className="box" onClick={() => handleNavigation('/purchase-management')}>구매관리</div>
                <div className="box" onClick={() => handleNavigation('/material-management')}>자재관리</div>
                <div className="box" onClick={() => handleNavigation('/quality-management')}>품질관리</div>
                <div className="box" onClick={() => handleNavigation('/production-management')}>생산관리</div>
            </div>
        </div>
    );
}

export default Welcome;
