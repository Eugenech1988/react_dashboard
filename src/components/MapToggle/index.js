import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {mapToggle} from 'actions/toggleAction';
import mapIcon from 'assets/icons/mapIcon.svg';
import Button from 'components/Button';
import './style.scss';

const mapStateToProps = state => ({
  isMapOpened: state.togglers.isMapOpened
});

const dispatchMapToProps = dispatch => ({
  mapToggle: () => dispatch(mapToggle())
});

@connect(mapStateToProps, dispatchMapToProps)
class MapToggle extends Component {
  handleClick() {
    const {mapToggle} = this.props;
    mapToggle();
  }
  render() {
    return (
      <Button
        aditionalCls='map-toggle'
        btnImgSrc={mapIcon}
        btnFunc={::this.handleClick}
      />
    );
  }
}

MapToggle.propTypes = {
  mapToggle: PropTypes.func,
  isMapOpened: PropTypes.func
};

export default MapToggle;
