import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css';

const SideMenu = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleMenuClick = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <div className="side-menu">
            <div className="menu-item" onClick={() => handleMenuClick('purchase')}>
                <span>구매관리</span>
                {openMenu === 'purchase' && (
                    <div className="submenu">
                        <Link to="/purchase-management">거래처</Link>
                        <Link to="/purchase-list">발주리스트</Link>
                        <Link to="/goods-receipt">입고완료</Link>
                        <Link to="/returns-management">반품관리</Link>
                        <Link to="/issue-management">이슈관리</Link>
                    </div>
                )}
            </div>
            <div className="menu-item" onClick={() => handleMenuClick('material')}>
                <span>자재관리</span>
                {openMenu === 'material' && (
                    <div className="submenu">
                        <Link to="/material-management">자재 리스트</Link>
                        {/* Add other submenus here */}
                    </div>
                )}
            </div>
            <div className="menu-item" onClick={() => handleMenuClick('quality')}>
                <span>품질관리</span>
                {openMenu === 'quality' && (
                    <div className="submenu">
                        <Link to="/quality-management">품질 리스트</Link>
                        {/* Add other submenus here */}
                    </div>
                )}
            </div>
            <div className="menu-item" onClick={() => handleMenuClick('production')}>
                <span>생산관리</span>
                {openMenu === 'production' && (
                    <div className="submenu">
                        <Link to="/production-management">생산 리스트</Link>
                        {/* Add other submenus here */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SideMenu;
