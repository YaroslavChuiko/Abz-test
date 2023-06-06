import React from 'react';
import Text from '../Typography/Text';
import s from './Card.module.scss';
import truncate from '../../utils/truncate';

const maxTextLength = 35;

const Card = ({ name, email, phone, position, photo }) => {
  return (
    <div className={s.card}>
      <img className={s.avatar} src={photo} alt="avatar" />

      <Text>{truncate(name, maxTextLength)}</Text>

      <div className={s.info}>
        <Text>{truncate(position, maxTextLength)}</Text>
        <Text>{truncate(email, maxTextLength)}</Text>
        <Text>{truncate(phone, maxTextLength)}</Text>
      </div>
    </div>
  );
};

export default Card;
