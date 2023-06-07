import React, { useState } from 'react';
import s from './Home.module.scss';
import Promo from './Promo/Promo';
import Container from '../../components/Container/Container';
import Users from './Users/Users';
import Form from './Form/Form';

const Home = () => {
  const [isRefetchUsers, setIsRefetchUsers] = useState(false);

  const refetchUsers = () => {
    setIsRefetchUsers(true);
  };

  return (
    <div className={s.home}>
      <Container>
        <Promo />
        <Users isRefetch={isRefetchUsers} setIsRefetch={setIsRefetchUsers} />
        <Form refetchUsers={refetchUsers} />
      </Container>
    </div>
  );
};

export default Home;
