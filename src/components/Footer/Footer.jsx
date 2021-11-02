import React, { useContext } from 'react';
import './Footer.scss';
import { navLogo } from '../../services/Services';
import { GlobalContext } from '../../context/GlobalContext';

const Footer = () => {
  const { icons } = useContext(GlobalContext);

  // RENDER SOCIAL NETWORK ICONS
  const renderIcons = () => {
    return (
      <>
        <div className="footer-top__social">
          {icons.map((item) => (
            <a href="#" className="footer-top__social__link" key={item.id}>
              <img src={item.img} alt={item.name} />
            </a>
          ))}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="footer-top">
        <ul className="footer-top__menu">
          <li className="footer-top__menu__item">
            <a href="#" className="footer-top__menu__link">
              Destination
            </a>
          </li>
          <li className="footer-top__menu__item">
            <a href="#" className="footer-top__menu__link">
              Travel styles
            </a>
          </li>
          <li className="footer-top__menu__item">
            <a href="#" className="footer-top__menu__link">
              Travel Deals
            </a>
          </li>
          <li className="footer-top__menu__item">
            <a href="#" className="footer-top__menu__link">
              Gear
            </a>
          </li>
        </ul>
        {renderIcons()}
      </div>
      <div className="footer-bottom bcg-footer-bottom">
        <div className="footer-brand">
          <div className="footer-brand__logo">
            <img src={navLogo} alt="NavLogo" />
          </div>
          <div className="footer-brand__name">
            <span>Always outdoors</span>
          </div>
        </div>
        <div className="footer-copyright">
          <span>&copy; 2021, Markko Milenkovic</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
