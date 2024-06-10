import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css';

function SideMenu() {
    const [openMenu, setOpenMenu] = useState('');

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? '' : menu);
    };

    return (
        <div className="side-menu">
            <div className="menu-item">
                <span onClick={() => toggleMenu('purchase')}>구매관리</span>
                {openMenu === 'purchase' && (
                    <div className="submenu">
                        <Link to="/purchase-management">거래처</Link>
                        <Link to="/purchase-management">발주 리스트</Link>
                        <Link to="/purchase-management">입고 완료</Link>
                        <Link to="/purchase-management">반품 관리</Link>
                        <Link to="/purchase-management">이슈 관리</Link>
                    </div>
                )}
            </div>
            <div className="menu-item">
                <span onClick={() => toggleMenu('material')}>자재관리</span>
                {openMenu === 'material' && (
                    <div className="submenu">
                        <Link to="/material-management">재고 현황</Link>
                        <Link to="/material-management">사용용 조회</Link>
                        <Link to="/material-management">위치조회/관리</Link>
                        <Link to="/material-management">폐기 관리</Link>
                    </div>
                )}
            </div>
            <div className="menu-item">
                <span onClick={() => toggleMenu('quality')}>품질관리</span>
                {openMenu === 'quality' && (
                    <div className="submenu">
                        <Link to="/quality-management">BOM 조회</Link>
                        <Link to="/quality-management">신규등록</Link>
                        <Link to="/quality-management">BOM수정</Link>
                        <Link to="/quality-management">수정이력관리</Link>
                    </div>
                )}
            </div>
            <div className="menu-item">
                <span onClick={() => toggleMenu('production')}>생산관리</span>
                {openMenu === 'production' && (
                    <div className="submenu">
                        <Link to="/production-management">금일 생산(예정)</Link>
                        <Link to="/production-management">전일 생산(완료)</Link>
                        <Link to="/production-management">차주 생산 예정</Link>
                        <Link to="/production-management">계획수량 계산</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SideMenu;
