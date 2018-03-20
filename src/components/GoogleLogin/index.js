import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import GIcon from 'assets/icons/google.svg';
import {setGoogleDetails} from 'actions/loginAction';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  setGoogleDetails: (data) => dispatch(setGoogleDetails(data))
});

@connect(mapStateToProps, mapDispatchToProps)
class GoogleLogin extends Component {
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
  render() {
    return (
      <div className='login-form__google-login-wrap'>
        <Button
          google='onSignIn'
          additionalID='google-btn'
          btnImgSrc={GIcon}
          aditionalCls='google-btn'
          btnText='connect to google'
        />
      </div>
    );
  }
}

GoogleLogin.propTypes = {
  setGoogleDetails: PropTypes.func
};

export default GoogleLogin;
