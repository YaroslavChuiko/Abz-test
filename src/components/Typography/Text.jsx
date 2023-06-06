import React from 'react';
import s from './Text.module.scss';

const Text = ({ children }) => {
  return <p className={s.text}>{children}</p>;
};

export default Text;
