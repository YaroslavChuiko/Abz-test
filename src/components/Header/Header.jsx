import React from 'react';
import s from './Header.module.scss';
import Container from '../Container/Container';
import Logo from './components/Logo';
import Navbar from './components/Navbar';

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.inner}>
          <Logo />
          <Navbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
