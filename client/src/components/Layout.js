import React from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
    const location = useLocation();
    const navigate = useNavigate();
    const { name, team } = location.state || {}; // Ensure location.state is defined

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="layout">
            <div className="side-menu">
                <div className="menu-item">
                    <span>구매관리</span>
                    <div className="submenu">
                        <a href="#">거래처</a>
                        <a href="#">발주리스트</a>
                        <a href="#">입고완료</a>
                        <a href="#">반품관리</a>
                        <a href="#">이슈관리</a>
                    </div>
                </div>
                <div className="menu-item">
                    <span>자재관리</span>
                    <div className="submenu">
                        <a href="#">하위 메뉴 1</a>
                        <a href="#">하위 메뉴 2</a>
                    </div>
                </div>
                <div className="menu-item">
                    <span>품질관리</span>
                    <div className="submenu">
                        <a href="#">하위 메뉴 1</a>
                        <a href="#">하위 메뉴 2</a>
                    </div>
                </div>
                <div className="menu-item">
                    <span>생산관리</span>
                    <div className="submenu">
                        <a href="#">하위 메뉴 1</a>
                        <a href="#">하위 메뉴 2</a>
                    </div>
                </div>
            </div>
            <div className="content">
                <header>
                    <div className="user-info">
                        <span>{name}({team})님 접속!</span>
                        <button onClick={handleLogout}>로그아웃</button>
                    </div>
                </header>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
