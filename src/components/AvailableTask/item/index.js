import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({

});

@connect(mapStateToProps, dispatchMapToProps)
class AvailableTaskItem extends Component {
  render() {
    const {taskItemText, taskItemClick, dataIndex} = this.props;
    return (
      <li className={`available-task__item`} onClick={taskItemClick} data-index={dataIndex}>
        {taskItemText}
      </li>
    );
  };
}

AvailableTaskItem.propTypes = {
  taskItemText: PropTypes.string,
  taskItemClick: PropTypes.func,
  dataIndex: PropTypes.number
};

export default AvailableTaskItem;
