import React from 'react';
import { useLocation } from 'react-router-dom';
import SideMenu from './SideMenu';
import './Layout.css';

function Layout({ children }) {
    const location = useLocation();
    const { name, team } = location.state || { name: '', team: '' };

    return (
        <div className="layout-container">
            <SideMenu />
            <div className="main-content">
                <div className="header">
                    <div className="user-info">
                        {name}({team})님 접속!
                    </div>
                    <div className="logout">
                        <a href="/">로그아웃</a>
                    </div>
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
