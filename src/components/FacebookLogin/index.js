import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from 'components/Button';
import PropTypes from 'prop-types';

import {setFBDetails} from 'actions/loginAction';
import FBIcon from 'assets/icons/facebook.svg';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setFBDetails: (data) => dispatch(setFBDetails(data))
});

@connect(mapStateToProps, mapDispatchToProps)
class FacebookLogin extends Component {
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
        const result = {
          ...response,
          user: userData
        };
        this.onFacebookLogin(true, result);
      });
    } else {
      this.onFacebookLogin(false);
    }
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      console.log('userName');
    } else {
      console.log('Facebook login error');
    }
  };
  
  render() {
    return (
      <div className='login-form__facebook-login-wrap' onClick={this.facebookLogin}>
        <Button
          login
          btnImgSrc={FBIcon}
          aditionalCls='facebook-btn'
          btnText='Connect to facebook'
        />
      </div>
    );
  }
}

FacebookLogin.propTypes = {
  setFBDetails: PropTypes.string
};

export default FacebookLogin;
