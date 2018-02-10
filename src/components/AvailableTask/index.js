import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import AvailableTaskItem from './item';
import {plumberTasks, electricianTasks, gardenerTasks, houseKeeperTasks, cookingTasks} from './aviableTasks';

const mapStateToProps = state => ({
  serviceItemText: state.taskPanel.serviceItemText
});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class AvailableTask extends Component {
  handleItemClick(e) {
   console.log('clicked');
  }
  render() {
    const {serviceItemText} = this.props;
    let items;
    if (serviceItemText) {
      if (serviceItemText === 'Plumber')
        items = plumberTasks;
      else if (serviceItemText === 'Electrician')
        items = electricianTasks;
      else if (serviceItemText === 'Gardener')
        items = gardenerTasks;
      else if (serviceItemText === 'Housekeeper')
        items = houseKeeperTasks;
      else if (serviceItemText === 'Cooking')
        items = cookingTasks;
    }
    return (
      <div className='available-task'>
        {items &&
        <div className='available-task__wrapper sidebar__wrapper'>
          <p className='available-task__heading sidebar__heading'>
            PLUMBER TASKS
          </p>
          <ul className='available-task__list'>
            {
              items.map((task, index) => {
                return (
                  <AvailableTaskItem taskItemClick={::this.handleItemClick} key={index} taskItemText={task.taskItemText}/>
                );
              })
            }
          </ul>
        </div>
        }
      </div>
    );
  };
}

AvailableTask.propTypes = {
  serviceItemText: PropTypes.string
};

export default AvailableTask;
