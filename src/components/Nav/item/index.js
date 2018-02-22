import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

class NavItem extends Component {
  render() {
    const {linkTo, linkText, sided} = this.props;
    return (
      <NavLink exact className={`nav__link ${sided ? 'nav__link--sided' : ''}`} to={linkTo}>{linkText}</NavLink>
    );
  }
};

NavItem.propTypes = {
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  sided: PropTypes.bool
};

export default NavItem;
