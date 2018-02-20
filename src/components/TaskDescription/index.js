import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setTaskDescription} from "actions/taskDetailsAction";
import './style.scss';

const mapStateToProps = state => ({});

const dispatchMapToProps = dispatch => ({
  setTaskDescription: (data) => dispatch(setTaskDescription(data))
});

@connect(mapStateToProps, dispatchMapToProps)
class TaskDescription extends Component {
  state = { isFocus: false};
  handleBlur(e) {
    const value = e.target.value;
    if (!value)
      this.setState({isFocus: false});
  }
  handleChange(e) {
    const value = e.target.value;
    const {setTaskDescription} = this.props;
    setTaskDescription(value);
  }
  handleFocus() {
    this.setState({isFocus: true});
  }
  handleLabelClick(e) {
    const target = e.target;
    target.nextSibling.focus();
  }
  render() {
    const {isFocus} = this.state;
    return (
      <div className='task-description'>
        <div className='task-description__wrapper sidebar__wrapper'>
          <div className='task-description__header sidebar__heading'>
            task description
          </div>
          <form className='task-decription__form'>
            <div className={`task-description__input-wrap ${isFocus ? 'task-description__input-wrap--active' : ''}`}>
              <label htmlFor='' className='task-description__label' onClick={::this.handleLabelClick}>type your description</label>
              <input type='text' className='task-description__input'
                ref='input'
                onFocus={::this.handleFocus}
                onBlur={::this.handleBlur}
                onChange={::this.handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    );
  };
}

TaskDescription.propTypes = {
  setTaskDescription: PropTypes.string
};

export default TaskDescription;
