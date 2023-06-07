import React from 'react';
import successImg from '../../../../assets/success-image.svg';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import s from './SentSuccessfully.module.scss';

const SentSuccessfully = () => {
  return (
    <>
      <SectionHeader>User successfully registered</SectionHeader>
      <div className={s.wrapper}>
        <img src={successImg} alt="success" />
      </div>
    </>
  );
};

export default SentSuccessfully;
