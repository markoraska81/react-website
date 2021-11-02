import React from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { navLogo, searchIcon } from '../../services/Services';
import MenuBtn from '../MenuBtn/MenuBtn';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-brand__logo">
            <img src={navLogo} alt="NavLogo" />
          </div>
          <div className="navbar-brand__name">
            <span>Always outdors</span>
          </div>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-top__menu__item">
            <NavLink
              to="/"
              className="navbar-menu__link"
              activeClassName="active"
            >
              Destination
            </NavLink>
          </li>
          <li className="navbar-menu__item">
            <NavLink
              to="/adventure"
              className="navbar-menu__link"
              activeClassName="active"
            >
              Travel Styles
            </NavLink>
          </li>
          <li className="navbar-menu__item">
            <NavLink
              to="/popular"
              className="navbar-menu__link"
              activeClassName="active"
            >
              Travel Deals
            </NavLink>
          </li>
          <li className="navbar-menu__item">
            <NavLink
              to="#"
              className="navbar-menu__link"
              activeClassName="active"
            >
              Gear
            </NavLink>
          </li>
        </ul>
        <div className="navbar-action">
          <div className="navbar-action__search">
            <div className="navbar-action__search__icon">
              <img src={searchIcon} alt="Search Icon" />
            </div>
            <span className="navbar-action__search__text">Search</span>
          </div>
          <MenuBtn />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
