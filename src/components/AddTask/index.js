import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import {togglePanel} from 'actions/panelAction';

const mapStateToProps = state => ({
  panelToggle: state.panelToggle
});

const dispatchMapToProps = dispatch => ({
  togglePanel: () => dispatch(togglePanel())
});

@connect(mapStateToProps, dispatchMapToProps)
class AddTask extends Component {
  handleClick() {
    const {togglePanel} = this.props;
    togglePanel();
  }
  render() {
    return (
      <div className='add-task'>
        <button type='button' className='add-task__btn' onClick={::this.handleClick}>
          <p className='add-task__text'>
            + new task
          </p>
        </button>
      </div>
    );
  };
}

AddTask.propTypes = {
  togglePanel: PropTypes.func
};

export default AddTask;
