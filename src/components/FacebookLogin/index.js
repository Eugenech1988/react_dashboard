import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {checkFBStatus} from 'actions/loginAction';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  checkFBStatus: (data) => dispatch(checkFBStatus(data))
});

@connect(mapStateToProps, mapDispatchToProps)
class FacebookLogin extends Component {
  componentWillMount() {
    const FB = window.FB;
    if (FB) {
      FB.getLoginStatus((response)=> {
        const {checkFBStatus} = this.props;
        checkFBStatus(response.status);
        console.log(response);
      });
    }
  }
  render() {
    return (
      <div className='facebook-login'/>
    );
  }
}

FacebookLogin.propTypes = {
  checkFBStatus: PropTypes.func
};

export default FacebookLogin;
