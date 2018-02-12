import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'components/Button';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({

});

@connect(mapStateToProps, dispatchMapToProps)
class TaskItem extends Component {
  render() {
    const {taskItemDate, taskItemDescription, taskItemLocation} = this.props;
    return (
      <li className='task-item'>
        <div className='task-item__wrapper'>
          <p className='task-item__date'>
            {taskItemDate}
          </p>
          <p className='task-item__description'>
            {taskItemDescription}
          </p>
          <div className="task-item__location">
            {taskItemLocation}
          </div>
          <div className='task-item__btn-wrapp'>
            <Button btnText='edit' aditionalCls='task-item__edit-btn'/>
            <Button btnText='delete' aditionalCls='task-item__delete-btn'/>
          </div>
        </div>
      </li>
    );
  };
}

TaskItem.propTypes = {
  taskItemDate: PropTypes.string,
  taskItemDescription: PropTypes.string,
  taskItemLocation: PropTypes.string
};

export default TaskItem;
