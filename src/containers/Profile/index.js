import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import LoginForm from 'components/LoginForm';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

@connect(mapStateToProps, mapDispatchToProps)
class Profile extends Component {
  render() {
    return (
      <div className='profile'>
          <LoginForm/>
      </div>
    );
  }
}

Profile.propTypes = {

};

export default Profile;
