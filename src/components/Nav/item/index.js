import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const NavItem = props => {
  const {linkTo, linkText, sided} = props;
  return (
    <NavLink exact className={`nav__link ${sided ? 'nav__link--sided' : ''}`} to={linkTo}>{linkText}</NavLink>
  );
};

NavItem.propTypes = {
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  sided: PropTypes.bool
};

export default NavItem;
