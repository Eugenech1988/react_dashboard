import React from 'react';

import NavItem from './item';

const Nav = props => {
  return (
    <div className='nav'>
      <div className='nav__wrapper'>
        <NavItem linkTo='/' linkText='Dashboard'/>
        <NavItem linkTo={'/history'}  linkText='History'/>
        <NavItem linkTo={'/profile'} sided linkText='Profile'/>
      </div>
    </div>
  );
};

export default Nav;
