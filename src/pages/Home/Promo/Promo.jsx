import React from 'react';
import Heading from '../../../components/Typography/Heading';
import Text from '../../../components/Typography/Text';
import Button from '../../../components/Button/Button';
import s from './Promo.module.scss';

const Promo = () => {
  return (
    <div className={s.promo}>
      <div className={s.content}>
        <div className={s.text}>
          <Heading>Test assignment for front-end developer</Heading>
          <Text>
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
            understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
            should also be excited to learn, as the world of Front-End Development keeps evolving.
          </Text>
        </div>
        <Button type="yellow">Sign Up</Button>
      </div>
    </div>
  );
};

export default Promo;
