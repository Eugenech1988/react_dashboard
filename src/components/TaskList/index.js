import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TaskItem from './item';
import './style.scss';

const mapStateToProps = state => ({
  currentTaskDetails: state.currentTaskDetails
});

const dispatchMapToProps = dispatch => ({
});

@connect(mapStateToProps, dispatchMapToProps)
class TaskList extends Component {
  componentWillReceiveProps(nextProps) {

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
