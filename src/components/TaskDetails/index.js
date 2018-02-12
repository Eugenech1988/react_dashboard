import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import Button from 'components/Button';
import {setTaskDetails} from 'actions/taskDetailsAction';
import moment from 'moment';

const mapStateToProps = state => ({
  taskAddress: state.taskPanel.taskAddress,
  serviceItemText: state.taskPanel.serviceItemText,
  availableTask: state.taskPanel.availableTask,
  taskDescription: state.taskPanel.taskDescription
});

const dispatchMapToProps = dispatch => ({
  setTaskDetails: (taskDate, taskDescription, taskLocation, taskId) => dispatch(setTaskDetails(taskDate, taskDescription, taskLocation, taskId))
});

@connect(mapStateToProps, dispatchMapToProps)
class TaskDetails extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const {setTaskDetails, taskAddress, serviceItemText, availableTask, taskDescription} = this.props;
    const taskDetails = `${serviceItemText}|${availableTask}|${taskDescription}`;
    const taskDate = moment().format('DD:MM:YYYY');
    const taskId = 1;
    setTaskDetails(taskDate, taskDetails, taskAddress, taskId);
  }
  
  componentWillReceiveProps(nextProps) {
    const {currentTaskDetails} = nextProps;
  }
  
  render() {
    const {taskAddress, serviceItemText, availableTask, taskDescription} = this.props;
    return (
      <div className='task-details'>
        <div className='task-details__wrapper sidebar__wrapper'>
          <p className='task-details__heading sidebar__heading'>
            new task
          </p>
          <p className='task-details__notify'>
            I need <span className='task-details__notify task-details__notify--marked'>
              {
                (serviceItemText === 'Plumber' && 'a plumber') ||
                (serviceItemText === 'Electrician' && 'an electrician') ||
                (serviceItemText === 'Gardener' && 'a gardener') ||
                (serviceItemText === 'Housekeeper' && 'a houskeeper') ||
                (serviceItemText === 'Cooking' && 'a cook')
              }
            </span> to <span className='task-details__notify task-details__notify--marked'>
              {availableTask}
            </span>{taskDescription ? ',' : '.'}
            {taskDescription &&
            <span className='task-details__notify task-details__notify--marked'>
              {` ${taskDescription}.`}
            </span>
            }
          </p>
          <p className='task-details__address'>
            {taskAddress}
          </p>
          <Button
            btnText='create project'
            aditionalCls='btn--confirm'
            btnFunc={::this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

TaskDetails.propTypes = {
  taskAddress: PropTypes.string,
  serviceItemText: PropTypes.string,
  availableTask: PropTypes.string,
  taskDescription: PropTypes.string,
  setTaskDetails: PropTypes.func
};

export default TaskDetails;
