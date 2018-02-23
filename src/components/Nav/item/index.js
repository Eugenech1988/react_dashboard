import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {headerToggle} from 'actions/toggleAction';

const mapDispatchToProps = dispatch => ({
  headerToggle: () => dispatch(headerToggle())
});

@connect(null, mapDispatchToProps, null, {pure: false})
class NavItem extends Component {
  handleClick() {
    const {headerToggle} = this.props;
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 768)
      headerToggle();
  }
  render() {
    const {linkTo, linkText, sided} = this.props;
    return (
      <NavLink exact className={`nav__link ${sided ? 'nav__link--sided' : ''}`} onClick={::this.handleClick} to={linkTo}>{linkText}</NavLink>
    );
  }
}

NavItem.propTypes = {
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  sided: PropTypes.bool,
  headerToggle: PropTypes.func
};

export default NavItem;
