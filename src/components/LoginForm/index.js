import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import FacebookLogin from 'components/FacebookLogin';
import GoogleLogin from 'components/GoogleLogin';
import Button from 'components/Button';
import FBIcon from 'assets/icons/facebook.svg';
import GIcon from 'assets/icons/google.svg';
import {setFBStatus} from "actions/loginAction";

const mapStateToProps = (state) => ({
  isFBLoggedIn: state.login.isFBLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
  setFBStatus: (data) => dispatch(setFBStatus(data))
});

@connect(mapStateToProps, mapDispatchToProps)
class LoginForm extends Component {
  state = {
    FBUsername: null,
    GUsername: null,
  };

  componentWillMount() {
    const FBLoginStatus = JSON.parse(localStorage.getItem('FBLogin'));
    console.log(FBLoginStatus);
  }

  componentDidMount() {

    const GBtn = document.getElementById('google-btn');
    if (GBtn) {
      this.googleLoginInit();
    }
  }

  googleLoginInit = () => {
    const googleUser = {};
    const attachSignin = (element) => {
      console.log(element.id);
      window.auth2.attachClickHandler(element, {},
        (googleUser) => {
          document.getElementById('name').innerText = "Signed in: " +
            googleUser.getBasicProfile().getName();
        }, (error) => {
          console.log(JSON.stringify(error, undefined, 2));
        });
    };
    window.gapi.load('auth2', () => {
      window.auth2 = window.gapi.auth2.init({
        client_id: '724509125947-0v71l2ctm57ut5972ksb16nnlp3squa4.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      attachSignin(document.getElementById('google-btn'));
    });
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    const {setFBStatus} = this.props;
    if (loginStatus === true) {
      setFBStatus(true);
      this.setState({
        FBUsername: resultObject.user.name
      });
    } else {
      console.log('Facebook login error');
      // alert('Facebook login error');
    }
  };

  render() {
    const {FBUsername, GUsername} = this.state;
    return (
      <div className='login-form'>
        {!FBUsername && !GUsername &&
        < FacebookLogin onLogin={this.onFacebookLogin}>
          <Button
            login
            btnImgSrc={FBIcon}
            aditionalCls='facebook-btn'
            btnText='Connect to facebook'
          />
        </FacebookLogin>
        }
        {!FBUsername && !GUsername &&
        <div className='login-form__separator-wrap'>
          <span className='login-form__separator'>
            OR
          </span>
        </div>
        }
        {!FBUsername && !GUsername &&
        <GoogleLogin>
          <Button
            google='onSignIn'
            additionalID='google-btn'
            btnImgSrc={GIcon}
            aditionalCls='google-btn'
            btnText='connect to google'
          />
        </GoogleLogin>
        }
        {FBUsername &&
        <p className='login-form__user-notify'>
          Welcome back
          <b>{FBUsername}</b>
        </p>
        }
      </div>
    );
  }
}

LoginForm.propTypes = {
  isFBLoggedIn: PropTypes.bool,
  setFBStatus: PropTypes.func
};

export default LoginForm;
