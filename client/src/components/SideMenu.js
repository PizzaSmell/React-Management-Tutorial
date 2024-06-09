import React from 'react';
import { NavLink } from 'react-router-dom';
import './Management.css';

function SideMenu() {
    return (
        <div className="side-menu">
            <h1>RODEMFOOD</h1>
            <ul>
                <li>
                    <NavLink to="/purchase-management" activeClassName="active">
                        구매관리
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/material-management" activeClassName="active">
                        재고 관리
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/quality-management" activeClassName="active">
                        BOM 관리
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/production-management" activeClassName="active">
                        생산 관리
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default SideMenu;
