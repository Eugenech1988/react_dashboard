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
    const {togglePanel} = this.props;
    togglePanel();
  }
  
  render() {
    const {isPanelOpened} = this.props;
    return (
      <div className='add-task__btn-wrap'>
        <button type='button' className='add-task__btn' onClick={::this.handleClick}>
          {`${isPanelOpened ? 'close task panel' : '+ new task'}`}
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
