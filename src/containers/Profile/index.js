import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import FacebookLogin from 'components/FacebookLogin';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

@connect(mapStateToProps, mapDispatchToProps)
class Profile extends Component {
  render() {
    return (
      <div className='profile'>
        <div className='profile__login-form'>
          <FacebookLogin/>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {

};

export default Profile;
