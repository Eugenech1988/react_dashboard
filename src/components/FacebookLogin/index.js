import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setFBStatus} from 'actions/loginAction';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setFBStatus: (data) => dispatch(setFBStatus(data))
});

@connect(mapStateToProps, mapDispatchToProps)
class FacebookLogin extends Component {
  componentWillMount() {
    console.log(this.props.onLogin);
  }
  
  componentDidMount() {
    document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
  }
  
  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
  }
  
  initializeFacebookLogin = () => {
    this.FB = window.FB;
    this.checkLoginStatus();
  };
  
  checkLoginStatus = () => {
    this.FB.getLoginStatus(this.facebookLoginHandler);
  };
  
  facebookLogin = () => {
    if (!this.FB) return;
    
    this.FB.getLoginStatus(response => {
      if (response.status === 'connected') {
        this.facebookLoginHandler(response);
      } else {
        this.FB.login(this.facebookLoginHandler, {scope: 'public_profile'});
      }
    }, );
  };
  
  facebookLoginHandler = response => {
    if (response.status === 'connected') {
      this.FB.api('/me', userData => {
        let result = {
          ...response,
          user: userData
        };
        this.props.onLogin(true, result);
      });
    } else {
      this.props.onLogin(false);
    }
  };
  
  render() {
    const {children} = this.props;
    return (
      <div className='login-form__facebook-login-wrap' onClick={this.facebookLogin}>
        {children}
      </div>
    );
  }
}

FacebookLogin.propTypes = {
  setFBStatus: PropTypes.func
};

export default FacebookLogin;
