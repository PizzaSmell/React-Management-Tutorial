import React from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';
import './Layout.css';

const Layout = ({ user, onLogout }) => {
    return (
        <div className="layout">
            <SideMenu />
            <div className="content">
                <header>
                    <div className="user-info">
                        {user.name}({user.team})님 접속!
                        <button onClick={onLogout}>로그아웃</button>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
