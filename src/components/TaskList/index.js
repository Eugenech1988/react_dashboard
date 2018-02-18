import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import TaskItem from './item';
import './style.scss';

const Fade = ({children, ...props}) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames='fade'
  >
    {children}
  </CSSTransition>
);

const mapStateToProps = state => ({
  taskListItems: state.taskListItems
});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class TaskList extends Component {
  render() {
    const currentTaskList = JSON.parse(localStorage.getItem('currentTaskList'));
    return (
      <TransitionGroup className='task-list'>
        {
          currentTaskList &&
          currentTaskList.map((item, index) => {
            return (
              <Fade key={index}>
                <TaskItem
                  taskItemDate={item.date}
                  taskItemDescription={item.details}
                  taskItemLocation={item.location}
                  dataIndex={item.id}
                />
              </Fade>
            );
          })
        }
      </TransitionGroup>
    );
  }
}

TaskList.propTypes = {
  taskListItems: PropTypes.array
};

export default TaskList;
