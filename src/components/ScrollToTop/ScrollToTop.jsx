import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { scroll } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [scroll]);

  return null;
};

export default ScrollToTop;
