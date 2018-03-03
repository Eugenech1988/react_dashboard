import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import FacebookLogin from 'components/FacebookLogin';
import Button from 'components/Button';

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
        < FacebookLogin onLogin={this.onFacebookLogin}>
          <Button
            login
            aditionalCls='facebook-btn'
            btnText='Connect to facebook'
          />
        </FacebookLogin>
      </div>
    );
  }
}

LoginForm.propTypes = {

};

export default LoginForm;
