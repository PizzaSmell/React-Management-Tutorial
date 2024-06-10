import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
    return (
        <div className="layout-container">
            <div className="sidebar">
                <div className="menu-item">
                    <span>구매관리</span>
                    <div className="submenu">
                        <div>거래처</div>
                        <div>발주리스트</div>
                        <div>입고완료</div>
                        <div>반품관리</div>
                        <div>이슈관리</div>
                    </div>
                </div>
                <div className="menu-item">
                    <span>자재관리</span>
                    <div className="submenu">
                        <!-- 하위 메뉴 항목들 -->
                    </div>
                </div>
                <div className="menu-item">
                    <span>품질관리</span>
                    <div className="submenu">
                        <!-- 하위 메뉴 항목들 -->
                    </div>
                </div>
                <div className="menu-item">
                    <span>생산관리</span>
                    <div className="submenu">
                        <!-- 하위 메뉴 항목들 -->
                    </div>
                </div>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
