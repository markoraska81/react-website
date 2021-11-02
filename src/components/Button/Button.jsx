import React from 'react';
import './Button.scss';

const Button = ({ children, type }) => {
  const btnName = () => {
    if (type === 'started') {
      return 'started';
    }
  };
  return (
    <>
      <button className={`btn-${btnName()}`}>{children}</button>
    </>
  );
};

export default Button;
