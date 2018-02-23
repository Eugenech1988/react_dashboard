import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TaskItem from './item';
//import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './style.scss';
import {setTaskList} from 'actions/taskListActions';
import {toggleConfirmModal} from 'actions/toggleAction';
import ConfirmModal from 'components/ConfirmModal';

const mapStateToProps = state => ({
  taskListItems: state.taskListItems,
  isConfirmModalOpened: state.togglers.isConfirmModalOpened
});

const dispatchMapToProps = dispatch => ({
  setTaskList: (data) => dispatch(setTaskList(data)),
  toggleConfirmModal: () => dispatch(toggleConfirmModal())
});

@connect(mapStateToProps, dispatchMapToProps)
class TaskList extends Component {
  componentWillMount() {
    const {setTaskList} = this.props;
    const currentTaskList = JSON.parse(localStorage.getItem('currentTaskList') || '[]');
    setTaskList(currentTaskList);
  }
  handleModal(e) {
    const {toggleConfirmModal} = this.props;
    e.preventDefault();
    toggleConfirmModal();
  }
  handleModal(e) {
    const {toggleConfirmModal} = this.props;
    e.preventDefault();
    toggleConfirmModal();
  }
    render() {
    const {taskListItems, isConfirmModalOpened} = this.props;
    return (
      <div className='task-list'>
        <ul className='task-list__list'>
          {
            taskListItems.length > 0 &&
            taskListItems.map((item, index) => {
              return (
                <TaskItem
                  key={index}
                  deleteFunc={::this.handleModalOpen}
                  taskItemDate={item.date}
                  taskItemDescription={item.details}
                  taskItemLocation={item.address}
                  dataIndex={item.id}
                />
              );
            })
          }
        </ul>
        {
          isConfirmModalOpened &&
            <ConfirmModal
              handleNo={::this.handleModalClose}
              headingText='Are you sure that you want to delete this task?'
            />
        }
      </div>
    );
  }
}

TaskList.propTypes = {
  taskListItems: PropTypes.array,
  isConfirmModalOpened: PropTypes.bool,
  setTaskList: PropTypes.func,
  toggleConfirmModal: PropTypes.func
};

export default TaskList;
