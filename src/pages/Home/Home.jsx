import React from 'react';
import s from './Home.module.scss';
import Promo from './Promo/Promo';
import Container from '../../components/Container/Container';
import Users from './Users/Users';
import Form from './Form/Form';

const Home = () => {
  return (
    <div className={s.home}>
      <Container>
        <Promo />
        <Users />
        <Form />
      </Container>
    </div>
  );
};

export default Home;
