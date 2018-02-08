import React from 'react';
import logoImg from 'assets/images/logo.svg';
import {Link} from 'react-router-dom';


const Logo = props => {
  return (
    <div className='logo'>
      <div className='logo__wrapper'>
        <Link to={'/'} className='logo__link'>
          <img src={logoImg} alt='' className='logo__img'/>
        </Link>
      </div>
    </div>
  );
};

Logo.propTypes = {};

export default Logo;
