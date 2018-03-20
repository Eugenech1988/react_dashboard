import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import Button from 'components/Button';
import FacebookLogin from 'components/FacebookLogin';
import GoogleLogin from 'components/GoogleLogin';
import {setGoogleDetails, setFBDetails} from 'actions/loginAction';

const mapStateToProps = (state) => ({
  googleUserName: state.login.googleUserName,
  FBUserName: state.login.FBUserName
});

const mapDispatchToProps = (dispatch) => ({
  setGoogleDetails: (data) => dispatch(setGoogleDetails(data)),
  setFBDetails: (data) => dispatch(setFBDetails(data))
});

@connect(mapStateToProps, mapDispatchToProps)
class LoginForm extends Component {
  componentWillMount() {
    const {setGoogleDetails, setFBDetails} = this.props;
    const googleUserName = JSON.parse(localStorage.getItem('googleUserName'));
    const FBUserName = JSON.parse(localStorage.getItem('FBUserName'));
    if (googleUserName !== null) {
      setGoogleDetails(googleUserName);
    } else if (FBUserName !== null) {
      setFBDetails(FBUserName);
    }
  }

  googleSignOut(e) {
    const {setGoogleDetails} = this.props;
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      setGoogleDetails(null);
    });
  }

  render() {
    const {googleUserName, FBUserName} = this.props;
    return (
      <div className='login-form'>
        {googleUserName === null && FBUserName === null &&
        <div className='login-form__wrapp-not-logged'>
          <FacebookLogin/>
          <div className='login-form__separator-wrap'>
            <span className='login-form__separator'>
              OR
            </span>
          </div>
          <GoogleLogin/>
          <div id='name'/>
        </div>
        }
        {

        }
        {FBUserName &&
        <div className='login-form__logged-wrap'>
          <p className='login-form__logged-notify'>
            Welcome back <br/>
            <b>{FBUserName}</b>
          </p>
          <Button/>
        </div>
        }
        {googleUserName &&
        <div className='login-form__logged-wrap'>
          <p className='login-form__logged-notify'>
            Welcome back <br/>
            <b>{googleUserName}</b>
          </p>
          <Button
            btnText='logout'
            aditionalCls='logout-btn'
            btnFunc={::this.googleSignOut}
          />
        </div>
        }
      </div>
    );
  }
}

LoginForm.propTypes = {
  setGoogleDetails: PropTypes.func,
  setFBDetails: PropTypes.func,
  googleUserName: PropTypes.string,
  FBUserName: PropTypes.string
};

export default LoginForm;
