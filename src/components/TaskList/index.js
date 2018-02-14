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
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

const mapStateToProps = state => ({
  currentTaskDetails: state.currentTaskDetails,
  taskListItems: state.taskListItems
});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class TaskList extends Component {
  componentWillReceiveProps(nextProps) {
  
  }
  
  render() {
    const {taskListItems} = this.props;
    return (
      <TransitionGroup className='task-list'>
        {
          taskListItems.map((item, index) => {
            return (
              <Fade>
                <TaskItem
                  key={index}
                  taskItemDate={item.date}
                  taskItemDescription={item.details}
                  taskItemLocation={item.location}
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
