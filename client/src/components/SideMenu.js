import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SideMenu.css';

function SideMenu() {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedMenu } = location.state || {};

    const menuItems = [
        { name: '구매관리', path: '/purchase-management' },
        { name: '재고 관리', path: '/material-management' },
        { name: 'BOM 관리', path: '/quality-management' },
        { name: '생산 관리', path: '/production-management' },
    ];

    return (
        <div className="side-menu">
            <div className="logo">RODEMFOOD</div>
            <ul>
                {menuItems.map((item) => (
                    <li 
                        key={item.name} 
                        className={selectedMenu === item.name ? 'active' : ''}
                        onClick={() => navigate(item.path, { state: { selectedMenu: item.name } })}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideMenu;
