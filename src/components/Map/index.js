import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getUserPosition, setCustomCoords} from 'actions/userAction';
import './style.scss';

const mapStateToProps = state => ({
  loading: state.loading,
  userDetails: state.userDetails
});

const mapDispatchToProps = dispatch => ({
  getUserPosition: () => dispatch(getUserPosition()),
  setCustomCoords: (lat, lng) => dispatch(setCustomCoords(lat, lng))
  
});

@connect(mapStateToProps, mapDispatchToProps)
class Map extends Component {
  componentWillMount() {
    const {getUserPosition} = this.props;
    getUserPosition();
  }
  
  componentWillReceiveProps(nextProps) {
    const {userDetails, setCustomCoords} = nextProps;
    const mapDiv = document.getElementById('map');
    if (mapDiv) {
      let center = {lat: userDetails.lat, lng: userDetails.lng};
      const zoom = 14;
      const map = new window.google.maps.Map(mapDiv, {
        zoom,
        center,
        disableDefaultUI: true
      });
      map.panTo(center);
      new window.google.maps.Marker({
        position: center,
        map,
        zIndex: 1000
      });
      window.google.maps.event.addDomListener(window, 'resize', () => {
        map.setCenter(center);
      });
      window.google.maps.event.addListener(map, 'click', function (event) {
        const customLat = event.latLng.lat();
        const customLng = event.latLng.lng();
        setCustomCoords(customLat, customLng);
        center = {lat: customLat, lng: customLng};
        map.setCenter(center);
      });
    }
  }
  
  render() {
    const {userDetails} = this.props;
    return (
      <div className='map'>
        <div className='map__wrapper'>
          {userDetails &&
          <div id='map'/>
          }
        </div>
      </div>
    );
  };
}

Map.propTypes = {
  getUserPosition: PropTypes.func,
  setCustomCoords: PropTypes.func,
  userDetails: PropTypes.object
};

export default Map;
