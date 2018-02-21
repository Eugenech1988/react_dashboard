import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import {togglePanel} from 'actions/toggleAction';

const mapStateToProps = state => ({
  isPanelOpened: state.togglers.isPanelOpened
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
      target.innerText = 'close panel';
    else
      target.innerText = '+ new task';
  }
  
  render() {
    return (
      <div className='add-task__btn-wrap'>
        <button type='button' className='add-task__btn' onClick={::this.handleClick}>
          + new task
        </button>
      </div>
    );
  };
}

AddTask.propTypes = {
  togglePanel: PropTypes.func,
  isPanelOpened: PropTypes.bool
};

export default AddTask;
