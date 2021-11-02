import React, { useContext } from 'react';
import './MenuBtn.scss';
import { GlobalContext } from '../../context/GlobalContext';

const MenuBtn = () => {
  const { menuOpen, menuToggle } = useContext(GlobalContext);
  return (
    <>
      <div
        className="menu-btn"
        onClick={menuToggle}
        style={{
          transform: menuOpen ? 'rotate(180deg)' : null,
        }}
      >
        <div
          className="menu-btn__line"
          style={{
            transform: menuOpen ? 'rotate(45deg) translate(4px,4px)' : null,
          }}
        ></div>
        <div
          className="menu-btn__line"
          style={{
            opacity: menuOpen ? '0' : '1',
          }}
        ></div>
        <div
          className="menu-btn__line"
          style={{
            transform: menuOpen ? 'rotate(-45deg) translate(7px, -7px)' : null,
          }}
        ></div>
      </div>
    </>
  );
};

export default MenuBtn;
