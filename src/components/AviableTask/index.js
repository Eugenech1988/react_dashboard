import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import AviableTaskItem from './item';
import {plumberTasks, electricianTasks, gardenerTasks, houseKeeperTasks, cookingTasks} from './aviableTasks';

const mapStateToProps = state => ({
  serviceItemText: state.taskPanel.serviceItemText
});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class AviableTask extends Component {
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
      <div className='aviable-task'>
        {items &&
        <div className='aviable-task__wrapper sidebar__wrapper'>
          <p className='aviable-task__heading sidebar__heading'>
            PLUMBER TASKS
          </p>
          
          <ul className='aviable-task__list'>
            {
              items.map((task, index) => {
                return (
                  <AviableTaskItem key={index} taskItemText={task.taskItemText}/>
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

AviableTask.propTypes = {
  serviceItemText: PropTypes.string
};

export default AviableTask;
