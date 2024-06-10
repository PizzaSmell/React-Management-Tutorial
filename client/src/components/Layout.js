import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', team: '' });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    const toggleSubmenu = (e) => {
        e.currentTarget.classList.toggle('active');
    };

    return (
        <div className="layout">
            <div className="side-menu">
                <div className="menu-item" onClick={toggleSubmenu}>
                    <span>구매관리</span>
                    <div className="submenu">
                        <a href="#">거래처</a>
                        <a href="#">발주리스트</a>
                        <a href="#">입고완료</a>
                        <a href="#">반품관리</a>
                        <a href="#">이슈관리</a>
                    </div>
                </div>
                <div className="menu-item" onClick={toggleSubmenu}>
                    <span>자재관리</span>
                    <div className="submenu">
                        <a href="#">하위 메뉴 1</a>
                        <a href="#">하위 메뉴 2</a>
                    </div>
                </div>
                <div className="menu-item" onClick={toggleSubmenu}>
                    <span>품질관리</span>
                    <div className="submenu">
                        <a href="#">하위 메뉴 1</a>
                        <a href="#">하위 메뉴 2</a>
                    </div>
                </div>
                <div className="menu-item" onClick={toggleSubmenu}>
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
                        <span>{user.name}({user.team})님 접속!</span>
                        <button onClick={handleLogout}>로그아웃</button>
                    </div>
                </header>
                <div className="page-title">자재관리</div>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
