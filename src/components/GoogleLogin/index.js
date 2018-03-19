import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

@connect()
class GoogleLogin extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className='login-form__google-login-wrap'>
        {children}
      </div>
    )
  }
}

GoogleLogin.propTypes = {
  children: PropTypes.node
};

export default GoogleLogin;
