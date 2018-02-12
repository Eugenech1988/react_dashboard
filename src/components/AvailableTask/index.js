import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import AvailableTaskItem from './item';
import {setAvailableTasks} from 'actions/taskDetailsAction';
import {plumberTasks, electricianTasks, gardenerTasks, houseKeeperTasks, cookingTasks} from './aviableTasks';

const mapStateToProps = state => ({
  serviceItemText: state.taskPanel.serviceItemText
});

const dispatchMapToProps = dispatch => ({
  setAvailableTasks: (data) => dispatch(setAvailableTasks(data))
});

@connect(mapStateToProps, dispatchMapToProps)
class AvailableTask extends Component {
  state = {activeItem: ''};
  handleItemClick(e) {
    const value = e.target.innerText;
    const index = e.target.getAttribute('data-index');
    this.setState({activeItem: index});
    const {setAvailableTasks} = this.props;
    setAvailableTasks(value);
  }
  render() {
    const {serviceItemText} = this.props;
    const {activeItem} = this.state;
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
            {
              (serviceItemText === 'Plumber' && 'plumber tasks') ||
              (serviceItemText === 'Elecrtician' && 'electrician tasks') ||
              (serviceItemText === 'Gardener' && 'gardener tasks') ||
              (serviceItemText === 'HouseKeeper' && 'housekeeper tasks') ||
              (serviceItemText === 'Cooking' && 'Cooking tasks')
            }
          </p>
          <ul className='available-task__list'>
            {
              items.map((task, index) => {
                return (
                  <AvailableTaskItem
                    taskItemClick={::this.handleItemClick}
                    key={index}
                    taskItemText={task.taskItemText}
                    activeItem={activeItem}
                    itemIndex={index}
                    dataIndex={index}
                  />
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
  serviceItemText: PropTypes.string,
  availableTask: PropTypes.string,
  setAvailableTasks: PropTypes.func
};

export default AvailableTask;
