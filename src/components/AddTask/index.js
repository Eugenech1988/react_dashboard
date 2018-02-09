import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import {togglePanel} from 'actions/taskDetailsAction';

const mapStateToProps = state => ({
  isPanelOpened: state.taskPanel.isPanelOpened
});

const dispatchMapToProps = dispatch => ({
  togglePanel: () => dispatch(togglePanel())
});

@connect(mapStateToProps, dispatchMapToProps)
class AddTask extends Component {
  handleClick(e) {
    const target = e.target;
    const {togglePanel, isPanelOpened} = this.props;
    togglePanel();
    if (!isPanelOpened)
      target.innerText = 'close task panel';
    else
      target.innerText = '+ new task';
  }
  
  render() {
    return (
      <button type='button' className='add-task__btn' onClick={::this.handleClick}>
        + new task
      </button>
    );
  };
}

AddTask.propTypes = {
  togglePanel: PropTypes.func,
  isPanelOpened: PropTypes.bool
};

export default AddTask;
