import React from 'react';
import s from './Header.module.scss';
import Container from '../Container/Container';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import classNames from 'classnames';

const Header = ({ type = 'desktop' }) => {
  return (
    <header className={classNames(s.header, s[type])}>
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
