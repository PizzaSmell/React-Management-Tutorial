import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    const [expandedMenu, setExpandedMenu] = useState(null);
    const navigate = useNavigate();

    const handleMenuClick = (menu) => {
        setExpandedMenu(expandedMenu === menu ? null : menu);
    };

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="layout">
            <nav className="sidebar">
                <div className="menu-item" onClick={() => handleMenuClick('구매관리')}>
                    <span>구매관리</span>
                    {expandedMenu === '구매관리' && (
                        <div className="submenu">
                            <Link to="/layout/purchase-management">거래처</Link>
                            <Link to="/layout/purchase-management">발주리스트</Link>
                            <Link to="/layout/purchase-management">입고완료</Link>
                            <Link to="/layout/purchase-management">반품관리</Link>
                            <Link to="/layout/purchase-management">이슈관리</Link>
                        </div>
                    )}
                </div>
                <div className="menu-item" onClick={() => handleMenuClick('자재관리')}>
                    <span>자재관리</span>
                    {expandedMenu === '자재관리' && (
                        <div className="submenu">
                            <Link to="/layout/material-management">거래처</Link>
                            <Link to="/layout/material-management">발주리스트</Link>
                            <Link to="/layout/material-management">입고완료</Link>
                            <Link to="/layout/material-management">반품관리</Link>
                            <Link to="/layout/material-management">이슈관리</Link>
                        </div>
                    )}
                </div>
                <div className="menu-item" onClick={() => handleMenuClick('품질관리')}>
                    <span>품질관리</span>
                    {expandedMenu === '품질관리' && (
                        <div className="submenu">
                            <Link to="/layout/quality-management">거래처</Link>
                            <Link to="/layout/quality-management">발주리스트</Link>
                            <Link to="/layout/quality-management">입고완료</Link>
                            <Link to="/layout/quality-management">반품관리</Link>
                            <Link to="/layout/quality-management">이슈관리</Link>
                        </div>
                    )}
                </div>
                <div className="menu-item" onClick={() => handleMenuClick('생산관리')}>
                    <span>생산관리</span>
                    {expandedMenu === '생산관리' && (
                        <div className="submenu">
                            <Link to="/layout/production-management">거래처</Link>
                            <Link to="/layout/production-management">발주리스트</Link>
                            <Link to="/layout/production-management">입고완료</Link>
                            <Link to="/layout/production-management">반품관리</Link>
                            <Link to="/layout/production-management">이슈관리</Link>
                        </div>
                    )}
                </div>
            </nav>
            <main>
                <header>
                    <h1>구매관리</h1>
                    <div className="user-info">
                        <span>진경민(자재)님 접속!</span>
                        <button onClick={handleLogout}>로그아웃</button>
                    </div>
                </header>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
