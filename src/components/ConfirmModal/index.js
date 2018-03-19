import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import './style.scss';

const mapStateToProps = state => ({});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class EditModal extends Component {
  render() {
    const {addCls, isClosed, headingText, handleYes, handleNo, dataIndex} = this.props;
    return (
      <div className={`confirm-modal ${addCls ? addCls : ''}`}>
        <div className={`confirm-modal__overlay ${isClosed ? 'active' : ''}`}>
          <div className='confirm-modal__inner-wrapper'>
            <h2 className='confirm-modal__heading'>{headingText}</h2>
            <div className='confirm-modal__btn-wrapper'>
              <Button
                aditionalCls='confirm-modal__btn confirm-modal__btn--no'
                btnText='No'
                btnFunc={handleNo}
              />
              <Button
                data-index={dataIndex}
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

EditModal.propTypes = {
  addCls: PropTypes.string,
  headingText: PropTypes.string,
  handleYes: PropTypes.func,
  handleNo: PropTypes.func,
  isClosed: PropTypes.bool,
  dataIndex: PropTypes.number
};

export default EditModal;
