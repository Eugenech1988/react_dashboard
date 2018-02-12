import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TaskItem from './item';
import './style.scss';
import {addTaskToList} from 'actions/taskListActions';

const mapStateToProps = state => ({
  currentTaskDetails: state.currentTaskDetails
});

const dispatchMapToProps = dispatch => ({
  addTaskToList: (data) => dispatch(addTaskToList(data))
});

@connect(mapStateToProps, dispatchMapToProps)
class TaskList extends Component {
  componentWillReceiveProps(nextProps) {
    const {currentTaskDetails, addTaskToList} = nextProps;
    console.log(currentTaskDetails);
    // addTaskToList(currentTaskDetails);
  }
  
  render() {
    return (
      <ul className='task-list'>
        <TaskItem
          taskItemDate='05 05 2017 16:00'
          taskItemDescription='bla bla bla'
        />
      </ul>
    );
  }
}

TaskList.propTypes = {};

export default TaskList;
