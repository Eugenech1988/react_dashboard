import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import Button from 'components/Button';

const mapStateToProps = state => ({
  taskAddress: state.taskPanel.taskAddress
});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class TaskDetails extends Component {
  render() {
    const {taskAddress} = this.props;
    return (
      <div className='task-details'>
        <div className='task-details__wrapper sidebar__wrapper'>
          <p className='task-details__heading sidebar__heading'>
            new task
          </p>
          <p className='task-details__notify'>
            I need <span className='task-details__notify task-details__notify--marked'>a plumber</span> to <span
              className='task-details__notify task-details__notify--marked'> unblock a toilet,</span> <span
              className='task-details__notify task-details__notify--marked'>my daughter’s teddy bear sank in the toliet.</span>
          </p>
          <p className='task-details__address'>
            {taskAddress}
          </p>
          <Button
            btnText='create project'
            aditionalCls='btn--confirm'
          />
        </div>
      </div>
    );
  }
}

TaskDetails.propTypes = {
  taskAddress: PropTypes.string
};

export default TaskDetails;
