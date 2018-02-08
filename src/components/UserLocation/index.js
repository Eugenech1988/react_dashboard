import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({

});

@connect(mapStateToProps, dispatchMapToProps)
class UserLocation extends Component {
  render() {
    return (
      <div className='user-location'>
        <div className='user-location__wrapper'>
          <p className='user-location__heading'>
            location
          </p>
          <p className='user-location__notify'>
            141 Ogunlana Dr, Lagos 10128
          </p>
        </div>
      </div>
    );
  };
}

UserLocation.propTypes = {

};

export default UserLocation;
