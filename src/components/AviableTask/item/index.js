import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({

});

@connect(mapStateToProps, dispatchMapToProps)
class AviableTaskItem extends Component {
  render() {
    const {taskItemText} = this.props;
    return (
      <li className='aviable-task__item'>
        {taskItemText}
      </li>
    );
  };
}

AviableTaskItem.propTypes = {
  taskItemText: PropTypes.string
};

export default AviableTaskItem;
