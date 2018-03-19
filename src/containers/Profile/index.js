import React, {Component} from 'react';
import {connect} from 'react-redux';

import LoginForm from 'components/LoginForm';
import './style.scss';

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

export default Profile;
