import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'components/Button';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({

});

@connect(mapStateToProps, dispatchMapToProps)
class HistoryItem extends Component {
  render() {
    return (
      <div className='history-item'>
        <div className='history-item__wrapper'>
          <p className='history-item__date'>
            {taskItemDate}
          </p>
          <p className='history-item__description'>
            {taskItemDescription}
          </p>
          <div className='history-item__location'>
            {taskItemLocation}
          </div>
          <div className='history-item__btn-wrapp' data-index={dataIndex}>
            <Button btnText='edit' aditionalCls='history-item__edit-btn'/>
            <Button btnText='delete' btnFunc={::this.handleDeleteClick} aditionalCls='history-item__delete-btn'/>
          </div>
        </div>
      </div>
    );
  };
}

History.propTypes = {

};

export default HistoryItem;
