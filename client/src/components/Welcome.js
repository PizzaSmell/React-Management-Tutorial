import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
    const location = useLocation(); // 현재 위치를 가져오는 훅
    const { userid } = location.state || { userid: '' }; // 로그인한 사용자의 ID
    const navigate = useNavigate(); // 페이지 네비게이션 훅
    const [userInfo, setUserInfo] = useState({ name: '사용자', team: '팀' }); // 사용자 정보 상태

    // 컴포넌트가 마운트될 때 사용자 정보를 가져옴
    useEffect(() => {
        if (userid) {
            fetch(`http://43.201.170.201:5000/api/user-info?userid=${userid}`)
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
