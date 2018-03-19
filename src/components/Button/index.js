import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';

const mapStateToProps = state => ({});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class Button extends Component {
  render() {
    const {aditionalCls, btnText, btnFunc, isDisabled, btnImgSrc, google, additionalID} = this.props;
    return (
      <button id={additionalID} data-onsuccess={google} className={`btn ${aditionalCls ? aditionalCls : ''} ${isDisabled ? 'disabled' : ''}`} onClick={btnFunc}>
        {
          btnImgSrc &&
          <img src={btnImgSrc} alt='' className='btn__img'/>           
        }
        {btnText}
      </button>
    );
  };
}

Button.propTypes = {
  btnText: PropTypes.string,
  aditionalCls: PropTypes.string,
  isDisabled: PropTypes.bool,
  btnFunc: PropTypes.func,
  btnImgSrc: PropTypes.func,
  google: PropTypes.string,
  additionalID: PropTypes.string
};

export default Button;
