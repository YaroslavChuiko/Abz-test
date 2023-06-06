import React from 'react';
import Heading from '../Typography/Heading';
import s from './SectionHeader.module.scss';

const SectionHeader = ({ children }) => {
  return (
    <div className={s.header}>
      <Heading>{children}</Heading>
    </div>
  );
};

export default SectionHeader;
