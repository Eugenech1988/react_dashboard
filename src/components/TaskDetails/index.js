import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import Button from 'components/Button';

const mapStateToProps = state => ({});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class TaskDetails extends Component {
  render() {
    return (
      <div className='task-details'>
        <div className='task-details__wrapper sidebar__wrapper'>
          <p className='task-details__heading sidebar__heading'>
            New Task
          </p>
          <p className='task-details__notify'>
            I need <span className='task-details__notify task-details__notify--marked'>a plumber</span> to <span
              className='task-details__notify task-details__notify--marked'> unblock a toilet,</span> <span
              className='task-details__notify task-details__notify--marked'>my daughter’s teddy bear sank in the toliet.</span>
          </p>
          <p className='task-details__address'>
            My address is 141 Ogunlana Dr, Lagos 10128
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

TaskDetails.propTypes = {};

export default TaskDetails;
