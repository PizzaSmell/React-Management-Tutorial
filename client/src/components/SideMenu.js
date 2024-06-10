import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.css';

const Menu = ({ classList, children }) => {
  let classArr = ['side-menu'];
  classArr.push(classList);
  classArr = classArr.join(' ');

  return <div className={classArr}>{children}</div>;
};

const MenuTitle = ({ clickEvt }) => (
  <div className="menu-title custom-margin">
    <span>
      <i className="fas fa-bars"></i>
    </span>{' '}
    RODEMFOOD{' '}
    <span onClick={clickEvt} className="menu-toggle">
      <i className="fas fa-times not-rotated"></i>
    </span>
  </div>
);

const SearchBar = () => (
  <div className="searchBar custom-margin">
    <input type="text" placeholder="Search" />
  </div>
);

const MenuList = ({ toggleSubMenu, openMenu }) => (
  <div className="menu-list custom-margin">
    <div className="menu-item">
      <Link to="#" onClick={() => toggleSubMenu('purchase')}>
        <span><i className="fas fa-pen-fancy"></i></span> 구매관리
      </Link>
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
      <Link to="#" onClick={() => toggleSubMenu('material')}>
        <span><i className="fas fa-project-diagram"></i></span> 자재관리
      </Link>
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
      <Link to="#" onClick={() => toggleSubMenu('quality')}>
        <span><i className="fas fa-folder-open"></i></span> 품질관리
      </Link>
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
      <Link to="#" onClick={() => toggleSubMenu('production')}>
        <span><i className="fas fa-chart-pie"></i></span> 생산관리
      </Link>
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

const LoadMenu = () => {
  const [classHolder, setClassHolder] = useState('full-width');
  const [openMenu, setOpenMenu] = useState('');

  const toggleMenu = () => {
    setClassHolder(classHolder === 'full-width' ? 'no-width' : 'full-width');
  };

  const toggleSubMenu = (menu) => {
    setOpenMenu(openMenu === menu ? '' : menu);
  };

  return (
    <Menu classList={classHolder}>
      <MenuTitle clickEvt={toggleMenu} />
      <SearchBar />
      <MenuList toggleSubMenu={toggleSubMenu} openMenu={openMenu} />
    </Menu>
  );
};

export default LoadMenu;
