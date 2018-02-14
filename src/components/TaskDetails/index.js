import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import TaskDetailsForm from './form';
import {addTaskToList} from 'actions/taskListActions';
import moment from 'moment';

const mapStateToProps = state => ({
  taskAddress: state.taskPanel.taskAddress,
  serviceItemText: state.taskPanel.serviceItemText,
  availableTask: state.taskPanel.availableTask,
  taskDescription: state.taskPanel.taskDescription,
  taskListItems: state.taskListItems
});

const dispatchMapToProps = dispatch => ({
  addTaskToList: (data) => dispatch(addTaskToList(data))
});

@connect(mapStateToProps, dispatchMapToProps)
class TaskDetails extends Component {
  submit = (values) => {
    const {addTaskToList, taskListItems} = this.props;
    const thisMoment = moment().format('DD.MM.YYYY h:mm A');
    const idArray = [];
    for (let i = 0; i < taskListItems; i++)
      idArray.push(taskListItems.id);
    const maxId = Math.max(...idArray);
    addTaskToList(Object.assign({}, values, {id: maxId, date: thisMoment}));
  };
  
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
          <TaskDetailsForm
            onSubmit={this.submit}
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
  addTaskToList: PropTypes.func,
  taskListItems: PropTypes.func
};

export default TaskDetails;
