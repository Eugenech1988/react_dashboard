import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Logo from 'components/Logo';
import Nav from 'components/Nav';
import MapToggle from 'components/MapToggle';
import './style.scss';
import {headerToggle} from 'actions/toggleAction';

const mapStateToProps = (state) => ({
  isHeaderOpened: state.togglers.isHeaderOpened
});

const mapDispatchToProps = (dispatch) => ({
  headerToggle: () => dispatch(headerToggle())
});

@connect(mapStateToProps, mapDispatchToProps, null, {pure: false})
class Header extends Component {
  handleClick(e) {
    e.preventDefault();
    const {headerToggle} = this.props;
    headerToggle();
  }
  render() {
    const {isHeaderOpened} = this.props;
    return (
      <div className={`main-header ${isHeaderOpened ? 'main-header--opened' : ''}`}>
        <div className='main-header__wrapper'>
          <div className='content-container'>
            <div className='main-header__inner'>
              <button
                className='main-header__burger-btn'
                onClick={::this.handleClick}
              />
              <Logo/>
              <Nav/>
              <MapToggle/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  headerToggle: PropTypes.func,
  isHeaderOpened: PropTypes.bool
};

export default Header;
