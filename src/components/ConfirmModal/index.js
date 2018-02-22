import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import './style.scss';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({

});

@connect(mapStateToProps, dispatchMapToProps)
class ConfirmModal extends Component {
  render() {
    const {addCls, headingText, handleYes, handleNo} = this.props;
    return (
      <div className={`confirm-modal ${addCls ? addCls : ''}`}>
        <div className='confirm-modal__overlay'>
          <div className='confirm-modal__inner-wrapper'>
            <h2 className='confirm-modal__heading'>{headingText}</h2>
            <div className='confirm-modal__btn-wrapper'>
              <Button
                aditionalCls='confirm-modal__btn confirm-modal__btn--no'
                btnText='No'
                btnFunc={handleNo}
              />
              <Button
                aditionalCls='confirm-modal__btn confirm-modal__btn--yes'
                btnText='Yes'
                btnFunc={handleYes}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

ConfirmModal.propTypes = {
  addCls: PropTypes.string,
  headingText: PropTypes.string,
  handleYes: PropTypes.func,
  handleNo: PropTypes.func
};

export default ConfirmModal;
