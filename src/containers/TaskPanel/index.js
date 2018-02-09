import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import TaskDetails from 'components/TaskDetails';
import UserLocation from 'components/UserLocation';
import ServiceType from 'components/ServiceType';
import AviableTask from 'components/AviableTask';
import TaskDescription from 'components/TaskDescription';

const mapStateToProps = state => ({
  isPanelOpened: state.taskPanel.isPanelOpened
});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class TaskPanel extends Component {
  render() {
    const {isPanelOpened} = this.props;
    return (
      <div className='task-panel'>
        <div className={`task-panel__wrapper ${isPanelOpened ? 'task-panel__wrapper--active' : ''}`}>
          <TaskDetails/>
          <UserLocation/>
          <ServiceType/>
          <AviableTask/>
          <TaskDescription/>
        </div>
      </div>
    );
  };
}

TaskPanel.propTypes = {
  isPanelOpened: PropTypes.bool
};

export default TaskPanel;
