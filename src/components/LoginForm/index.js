import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import FacebookLogin from 'components/FacebookLogin';
import GoogleLogin from 'components/GoogleLogin';
import Button from 'components/Button';
import FBIcon from 'assets/icons/facebook.svg';
import GIcon from 'assets/icons/google.svg';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

@connect(mapStateToProps, mapDispatchToProps)


class LoginForm extends Component {
  state = {
    FBUsername: null,
    GUsername: null,
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    console.log(resultObject);
    if (loginStatus === true) {
      this.setState({
        FBUsername: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
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
            login
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

};

export default LoginForm;
