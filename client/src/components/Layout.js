import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [user, setUser] = useState({ name: '', team: '' });
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem('user'));
        if (loggedUser) {
            setUser(loggedUser);
        } else {
            navigate('/');
        }

        const path = location.pathname.split('/')[1];
        setActiveMenu(path);
    }, [location, navigate]);

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div className="layout">
            <div className="sidebar">
                <h2>RODEMFOOD</h2>
                <ul>
                    <li onClick={() => toggleMenu('purchase-management')}>
                        구매관리
                        {activeMenu === 'purchase-management' && (
                            <ul className="submenu">
                                <li><Link to="/purchase-management">거래처</Link></li>
                                <li><Link to="/purchase-management">발주 리스트</Link></li>
                                <li><Link to="/purchase-management">입고 완료</Link></li>
                                <li><Link to="/purchase-management">반품 관리</Link></li>
                                <li><Link to="/purchase-management">이슈 관리</Link></li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => toggleMenu('material-management')}>
                        자재관리
                        {activeMenu === 'material-management' && (
                            <ul className="submenu">
                                <li><Link to="/material-management">재고 현황</Link></li>
                                <li><Link to="/material-management">사용용 조회</Link></li>
                                <li><Link to="/material-management">위치조회/관리</Link></li>
                                <li><Link to="/material-management">폐기 관리</Link></li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => toggleMenu('quality-management')}>
                        품질관리
                        {activeMenu === 'quality-management' && (
                            <ul className="submenu">
                                <li><Link to="/quality-management">BOM 조회</Link></li>
                                <li><Link to="/quality-management">신규등록</Link></li>
                                <li><Link to="/quality-management">BOM수정</Link></li>
                                <li><Link to="/quality-management">수정이력관리</Link></li>
                            </ul>
                        )}
                    </li>
                    <li onClick={() => toggleMenu('production-management')}>
                        생산관리
                        {activeMenu === 'production-management' && (
                            <ul className="submenu">
                                <li><Link to="/production-management">금일 생산(예정)</Link></li>
                                <li><Link to="/production-management">진행 생산(완료)</Link></li>
                                <li><Link to="/production-management">제주 생산 예정</Link></li>
                                <li><Link to="/production-management">계획수량 계산</Link></li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <div className="content">
                <div className="header">
                    <div className="user-info">
                        {user.name}({user.team})님 접속!
                    </div>
                    <button className="logout-button" onClick={handleLogout}>로그아웃</button>
                </div>
                <div className="main-content">
                    <h1>{activeMenu.replace('-management', '관리')}</h1>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
