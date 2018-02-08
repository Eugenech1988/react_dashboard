import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({

});

@connect(mapStateToProps, dispatchMapToProps)
class TaskDescription extends Component {
  handleChange() {
    console.log('changed');
  }
  render() {
    return (
      <div className='task-description'>
        <div className='task-description__wrapper sidebar__wrapper'>
          <div className='task-description__header sidebar__heading'>
            task description
          </div>
          <form className='task-decription__form'>
            <div className='task-description__input-wrap'>
              <label htmlFor='' className='task-description__label'/>
              <input type='text' className='task-description__input' onChange={::this.handleChange}/>
            </div>
          </form>
        </div>
      </div>
    );
  };
}

TaskDescription.propTypes = {

};

export default TaskDescription;
