import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import {toggleConfirmModal} from 'actions/toggleAction';
// import ConfirmModal from 'components/ConfirmModal';

const mapStateToProps = state => ({
  isConfirmModalOpened: state.togglers.isConfirmModalOpened
});

const dispatchMapToProps = dispatch => ({
  removeTaskFromList: (data) => dispatch(removeTaskFromList(data)),
  toggleConfirmModal: () => dispatch(toggleConfirmModal())
});

@connect(mapStateToProps, dispatchMapToProps)
class TaskItem extends Component {
  handleDeleteClick(e) {
    const index = e.target.parentElement.getAttribute('data-index');
    const {removeTaskFromList} = this.props;
    e.preventDefault();
    removeTaskFromList(index);
  }
  render() {
    const {taskItemDate, taskItemDescription, deleteClickFunc, taskItemLocation, dataIndex} = this.props;
    return (
      <div className='task-item'>
        <div className='task-item__wrapper'>
          <p className='task-item__date'>
            {taskItemDate}
          </p>
          <p className='task-item__description'>
            {taskItemDescription}
          </p>
          <p className='task-item__location'>
            {taskItemLocation}
          </p>
          <div className='task-item__btn-wrapp' data-index={dataIndex}>
            <Button btnText='edit' aditionalCls='task-item__edit-btn'/>
            <Button btnText='delete' btnFunc={this.handleDeleteClick} aditionalCls='task-item__delete-btn'/>
          </div>
        </div>
      </div>
    );
  };
}

TaskItem.propTypes = {
  taskItemDate: PropTypes.string,
  taskItemDescription: PropTypes.string,
  taskItemLocation: PropTypes.string,
  dataIndex: PropTypes.number,
  toggleConfirmModal: PropTypes.func,
  deleteClickFunc: PropTypes.func,
  isConfirmModalOpened: PropTypes.bool,
  removeTaskFromList: PropTypes.func
};

export default TaskItem;
