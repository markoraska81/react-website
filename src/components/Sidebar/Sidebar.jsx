import React, { useContext } from 'react';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const Sidebar = () => {
  const { menuOpen, menuToggle } = useContext(GlobalContext);
  return (
    <>
      <div className="sidebar" style={{ right: menuOpen ? '0' : '-100%' }}>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <NavLink to="/" onClick={menuToggle} activeclassname="active">
              Destination
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink
              to="/adventure"
              onClick={menuToggle}
              activeclassname="active"
            >
              Travel styles
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink
              to="/popular"
              onClick={menuToggle}
              activeclassname="active"
            >
              Travel Deals
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="#" onClick={menuToggle} activeclassname="active">
              Gear
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
