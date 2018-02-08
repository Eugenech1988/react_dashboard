import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import AviableTaskItem from './item';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({

});

@connect(mapStateToProps, dispatchMapToProps)
class AviableTask extends Component {
  render() {
    return (
      <div className='aviable-task'>
        <div className='aviable-task__wrapper'>
          <p className='aviable-task__heading'>
            PLUMBER TASKS
          </p>
          <ul className='aviable-task__list'>
            <AviableTaskItem taskItemText='Unblock a toilet'/>
            <AviableTaskItem taskItemText='Unblock a sink'/>
            <AviableTaskItem taskItemText='Fix a water leak'/>
            <AviableTaskItem taskItemText='Install a sink'/>
            <AviableTaskItem taskItemText='Install a shower'/>
            <AviableTaskItem taskItemText='Install a toilet'/>
          </ul>
        </div>
      </div>
    );
  };
}

AviableTask.propTypes = {

};

export default AviableTask;
