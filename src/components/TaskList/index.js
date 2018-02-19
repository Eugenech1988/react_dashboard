import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TaskItem from './item';
import './style.scss';

const mapStateToProps = state => ({
  taskListItems: state.taskListItems
});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class TaskList extends Component {
  render() {
    const currentTaskList = JSON.parse(localStorage.getItem('currentTaskList'));
    return (
      <ul className='task-list'>
        {
          currentTaskList &&
          currentTaskList.map((item, index) => {
            return (
              <TaskItem
                key={index}
                taskItemDate={item.date}
                taskItemDescription={item.details}
                taskItemLocation={item.location}
                dataIndex={item.id}
              />
            );
          })
        }
      </ul>
    );
  }
}

TaskList.propTypes = {
  taskListItems: PropTypes.array
};

export default TaskList;
