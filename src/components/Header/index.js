import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'components/Logo';
import Nav from 'components/Nav';
import './style.scss';

const Header = props => {
  return (
    <div className='main-header'>
      <div className='main-header__wrapper'>
        <div className='content-container'>
          <div className='main-header__inner'>
            <Logo/>
            <Nav/>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
