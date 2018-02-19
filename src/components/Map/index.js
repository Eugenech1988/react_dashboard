import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import markerIcon from 'assets/icons/CombinedShapeCopy.svg';
import {getUserPosition, setCustomCoords} from 'actions/userAction';
import {setTaskAddress} from 'actions/taskDetailsAction';
import './style.scss';

const mapStateToProps = state => ({
  loading: state.loading,
  userDetails: state.userDetails
  // isPanelOpened: state.taskPanel.isPanelOpened
});

const mapDispatchToProps = dispatch => ({
  getUserPosition: () => dispatch(getUserPosition()),
  setCustomCoords: (lat, lng) => dispatch(setCustomCoords(lat, lng)),
  setTaskAddress: (data) => dispatch(setTaskAddress(data))
  
});

@connect(mapStateToProps, mapDispatchToProps)
class Map extends Component {
  componentWillMount() {
    const {getUserPosition} = this.props;
    getUserPosition();
  }
  
  componentWillReceiveProps(nextProps) {
    const {userDetails, setCustomCoords, isPanelOpened, setTaskAddress} = nextProps;
    const mapDiv = document.getElementById('map');
    if (mapDiv) {
      let center = {lat: userDetails.lat, lng: userDetails.lng};
      const zoom = 16;
      const geocoder = new window.google.maps.Geocoder;
      const map = new window.google.maps.Map(mapDiv, {
        zoom,
        center,
        disableDefaultUI: true
      });
      map.panTo(center);
      new window.google.maps.Marker({
        position: center,
        map,
        icon: markerIcon,
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
      geocoder.geocode({location: center}, (results, status) => {
        if (status === 'OK') {
          setTaskAddress(results[0].formatted_address);
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    }
  }
  
  render() {
    const {userDetails, isPanelOpened} = this.props;
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
  setTaskAddress: PropTypes.func,
  userDetails: PropTypes.object,
  isPanelOpened: PropTypes.bool
};

export default Map;
