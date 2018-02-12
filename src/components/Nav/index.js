import React from 'react';
import PropTypes from 'prop-types';

import NavItem from './item';

const Nav = props => {
  const {opened} = props;
  return (
    <div className={`nav ${opened ? 'nav--opened' : ''}`}>
      <div className='nav__wrapper'>
        <NavItem linkTo='/' linkText='Dashboard'/>
        <NavItem linkTo={'/history'} linkText='History'/>
        <NavItem linkTo={'/profile'} sided linkText='Profile'/>
      </div>
    </div>
  );
};

Nav.propTypes = {
  opened: PropTypes.bool
};

export default Nav;
