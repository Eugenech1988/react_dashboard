import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import FacebookLogin from 'components/FacebookLogin';
import Button from 'components/Button';
import FBIcon from 'assets/icons/facebook.svg';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

@connect(mapStateToProps, mapDispatchToProps)
  
  
class LoginForm extends Component {
  state = {
    username: null
  };
  
  onFacebookLogin = (loginStatus, resultObject) => {
    console.log(resultObject);
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  };
  
  render() {
    const {username} = this.state;
    return (
      <div className='login-form'>
        {!username &&
        < FacebookLogin onLogin={this.onFacebookLogin}>
          <Button
            login
            btnImgSrc={FBIcon}
            aditionalCls='facebook-btn'
            btnText='Connect to facebook'
          />
        </FacebookLogin>
        }
        {username &&
          <p className='login-form__user-notify'>
            Welcome back
            <b>{username}</b>
          </p>
        }
      </div>
    );
  }
}

LoginForm.propTypes = {

};

export default LoginForm;
