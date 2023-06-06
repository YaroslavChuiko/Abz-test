import React from 'react';
import s from './Button.module.scss';
import classNames from 'classnames';

const Button = ({ children, type = 'yellow', onClick, isDisabled = false }) => {
  return (
    <button className={classNames(s.btn, s[type])} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
