import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';

const Layout = ({ children }) => {
    const location = useLocation();
    const { name, team } = location.state || { name: '사용자', team: '팀' };
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="layout">
            <div className="sidebar">
                <div className="menu-item">
                    <span>구매관리</span>
                    <div className="submenu">
                        <div className="submenu-item">거래처</div>
                        <div className="submenu-item">발주 리스트</div>
                        <div className="submenu-item">입고 완료</div>
                        <div className="submenu-item">반품 관리</div>
                        <div className="submenu-item">이슈 관리</div>
                    </div>
                </div>
                <div className="menu-item">
                    <span>자재관리</span>
                    <div className="submenu">
                        <div className="submenu-item">하위 메뉴 1</div>
                        <div className="submenu-item">하위 메뉴 2</div>
                    </div>
                </div>
                <div className="menu-item">
                    <span>품질관리</span>
                    <div className="submenu">
                        <div className="submenu-item">하위 메뉴 1</div>
                        <div className="submenu-item">하위 메뉴 2</div>
                    </div>
                </div>
                <div className="menu-item">
                    <span>생산관리</span>
                    <div className="submenu">
                        <div className="submenu-item">하위 메뉴 1</div>
                        <div className="submenu-item">하위 메뉴 2</div>
                    </div>
                </div>
            </div>
            <div className="main-content">
                <div className="header">
                    <div>{name}({team})님 접속!</div>
                    <button className="logout-button" onClick={handleLogout}>로그아웃</button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Layout;
