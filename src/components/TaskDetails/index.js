import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import Button from 'components/Button';

const mapStateToProps = state => ({
  taskAddress: state.taskPanel.taskAddress,
  serviceItemText: state.taskPanel.serviceItemText,
  availableTask: state.taskPanel.availableTask,
  taskDescription: state.taskPanel.taskDescription
});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class TaskDetails extends Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
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
            onclick={::this.handleSubmit}
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
  taskDescription: PropTypes.string
};

export default TaskDetails;
