import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';

const mapStateToProps = state => ({
  taskAddress: state.taskPanel.taskAddress
});

const dispatchMapToProps = dispatch => ({

});

@connect(mapStateToProps, dispatchMapToProps)
class UserLocation extends Component {
  render() {
    const {taskAddress} = this.props;
    return (
      <div className='user-location'>
        <div className='user-location__wrapper sidebar__wrapper'>
          <p className='user-location__heading sidebar__heading'>
            location
          </p>
          <p className='user-location__notify'>
            {taskAddress}
          </p>
        </div>
      </div>
    );
  };
}

UserLocation.propTypes = {
  taskAddress: PropTypes.string
};

export default UserLocation;
