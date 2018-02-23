import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import TaskDetailsForm from './form';
import {addTaskToList} from 'actions/taskListActions';
import {addItemToHistory} from 'actions/historyAction';
import moment from 'moment';
import {setHistory} from "../../actions/historyAction";

const mapStateToProps = state => ({
  taskAddress: state.taskPanel.taskAddress,
  serviceItemText: state.taskPanel.serviceItemText,
  availableTask: state.taskPanel.availableTask,
  taskDescription: state.taskPanel.taskDescription,
  taskListItems: state.taskListItems
});

const dispatchMapToProps = dispatch => ({
  addTaskToList: (data) => dispatch(addTaskToList(data)),
  addItemToHistory: (data) => dispatch(addItemToHistory(data)),
  setHistory: (data) => dispatch(setHistory(data))
});

@connect(mapStateToProps, dispatchMapToProps)
class TaskDetails extends Component {
  componentDidMount() {
    const {setHistory} = this.props;
    const historyList = JSON.parse(localStorage.getItem('listHistory') || '[]');
    setHistory(historyList);
  }
  submit = (values) => {
    const {addTaskToList, taskListItems, addItemToHistory} = this.props;
    const thisMoment = moment().format('DD.MM.YYYY h:mm A');
    const idArray = [];
    let maxId;
    if (taskListItems.length > 1) {
      for (let i = 0; i < taskListItems.length; i++) {
        idArray.push(taskListItems[i].id);
      }
      maxId = Math.max(...idArray) + 1;
    } else if (taskListItems.length === 0) {
      maxId = 0;
    } else if (taskListItems.length === 1) {
      maxId = 1;
    }
    addTaskToList(Object.assign({}, values, {id: maxId, date: thisMoment}));
    addItemToHistory(Object.assign({}, values, {id: maxId, date: thisMoment}));
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
  taskListItems: PropTypes.func,
  addItemToHistory: PropTypes.func,
  setHistory: PropTypes.func
};

export default TaskDetails;
