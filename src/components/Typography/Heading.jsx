import React from 'react';
import s from './Heading.module.scss';

const Heading = ({ children }) => {
  return <h1 className={s.heading}>{children}</h1>;
};

export default Heading;
