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
    Menu{' '}
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

const MenuList = () => (
  <div className="menu-list custom-margin">
    <Link to="/purchase-management">
      <span>
        <i className="fas fa-pen-fancy"></i>
      </span>{' '}
      구매관리
    </Link>
    <Link to="/material-management">
      <span>
        <i className="fas fa-project-diagram"></i>
      </span>{' '}
      자재관리
    </Link>
    <Link to="/quality-management">
      <span>
        <i className="fas fa-folder-open"></i>
      </span>{' '}
      품질관리
    </Link>
    <Link to="/production-management">
      <span>
        <i className="fas fa-chart-pie"></i>
      </span>{' '}
      생산관리{' '}
      <span style={{ marginLeft: 'auto', width: 'auto' }}>
        <i className="fas fa-chevron-down"></i>
      </span>
    </Link>
  </div>
);

const LoadMenu = () => {
  const [classHolder, setClassHolder] = useState('full-width');

  const toggleMenu = () => {
    setClassHolder(classHolder === 'full-width' ? 'no-width' : 'full-width');
  };

  return (
    <Menu classList={classHolder}>
      <MenuTitle clickEvt={toggleMenu} />
      <SearchBar />
      <MenuList />
    </Menu>
  );
};

export default LoadMenu;
