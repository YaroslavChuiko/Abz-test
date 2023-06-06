import React from 'react';
import Button from '../../Button/Button';
import s from './Navbar.module.scss';
const Navbar = () => {
  return (
    <div className={s.navbar}>
      <Button>Users</Button>
      <Button>Sign Up</Button>
    </div>
  );
};

export default Navbar;
