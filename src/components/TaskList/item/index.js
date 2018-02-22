import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import {removeTaskFromList} from 'actions/taskListActions';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({
  removeTaskFromList: (data) => dispatch(removeTaskFromList(data))
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
    const {taskItemDate, taskItemDescription, taskItemLocation, dataIndex} = this.props;
    const {isClosed} = this.state;
    return (
      <div className={`task-item ${isClosed ? 'closed' : ''}`}>
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
            <Button btnText='delete' btnFunc={::this.handleDeleteClick} aditionalCls='task-item__delete-btn'/>
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
  removeTaskFromList: PropTypes.string,
  dataIndex: PropTypes.number
};

export default TaskItem;
