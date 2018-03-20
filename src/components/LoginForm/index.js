import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import FacebookLogin from 'components/FacebookLogin';
import Button from 'components/Button';
import FBIcon from 'assets/icons/facebook.svg';
import GIcon from 'assets/icons/google.svg';
import {setGoogleDetails} from 'actions/loginAction';

const mapStateToProps = (state) => ({
  // FBUserName: state.login
});

const mapDispatchToProps = (dispatch) => ({
  setGoogleDetails: (data) => dispatch(setGoogleDetails(data)),
});

@connect(mapStateToProps, mapDispatchToProps)
class LoginForm extends Component {
  state = {
    FBUsername: null,
    GUsername: null,
  };

  componentWillMount() {
    const {setGoogleDetails} = this.props;
    const googleUserName = JSON.parse(localStorage.getItem('googleUserName'));
    const FBUserName = JSON.parse(localStorage.getItem('FBUserName'));
    if (googleUserName !== null) {

    }
  }

  componentDidMount() {
    const GBtn = document.getElementById('google-btn');
    if (GBtn) {
      this.googleLoginInit();
    }
  }

  googleLoginInit = () => {
    const {setGoogleDetails} = this.props;
    // const googleUser = {};
    const attachSignin = (element) => {
      console.log(element.id);
      window.auth2.attachClickHandler(element, {},
        (googleUser) => {
          const userName = googleUser.getBasicProfile().getName();
          document.getElementById('name').innerText = 'Signed in: ' + userName;
          setGoogleDetails(userName);
        }, (error) => {
          console.log(JSON.stringify(error, undefined, 2));
        });
    };
    window.gapi.load('auth2', () => {
      window.auth2 = window.gapi.auth2.init({
        client_id: '724509125947-kl3722uin6pq7ghsi17lt2v6ng3datmr.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin'
      });
      attachSignin(document.getElementById('google-btn'));
    });
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
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
        <div className='login-form__google-login-wrap'>
          <Button
            google='onSignIn'
            additionalID='google-btn'
            btnImgSrc={GIcon}
            aditionalCls='google-btn'
            btnText='connect to google'
          />
        </div>
        }
        <div id='name'/>
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
  setGoogleDetails: PropTypes.object
};

export default LoginForm;
