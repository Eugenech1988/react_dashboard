import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TaskItem from './item';
import './style.scss';
import {setTaskList, removeTaskFromList, setEditDetails} from 'actions/taskListActions';
import {toggleConfirmModal, editTaskToggle} from 'actions/toggleAction';
import ConfirmModal from 'components/ConfirmModal';

const mapStateToProps = state => ({
  taskListItems: state.taskListItems,
  isConfirmModalOpened: state.togglers.isConfirmModalOpened,
  
});

const dispatchMapToProps = dispatch => ({
  setTaskList: (data) => dispatch(setTaskList(data)),
  toggleConfirmModal: () => dispatch(toggleConfirmModal()),
  removeTaskFromList: (data) => dispatch(removeTaskFromList(data)),
  editTaskToggle: (data) => dispatch(editTaskToggle(data)),
  setEditDetails: (data) => dispatch(setEditDetails(data))
});

@connect(mapStateToProps, dispatchMapToProps)
class TaskList extends Component {
  state = {
    isClosed: false,
    itemId: null
  };
  componentWillMount() {
    const {setTaskList} = this.props;
    const currentTaskList = JSON.parse(localStorage.getItem('currentTaskList') || '[]');
    setTaskList(currentTaskList);
  }
  handleModalOpen(e) {
    const {toggleConfirmModal} = this.props;
    const indexItemId = e.target.parentElement.getAttribute('data-id');
    this.setState({itemId: indexItemId});
    console.log(indexItemId);
    e.preventDefault();
    toggleConfirmModal();
  }
  handleModalClose(e) {
    const {toggleConfirmModal} = this.props;
    e.preventDefault();
    this.setState({isClosed: true});
    setTimeout(() => {
      toggleConfirmModal();
      this.setState({isClosed: false});
    }, 500);
  }
  handleDelete(e) {
    const {removeTaskFromList} = this.props;
    this.handleModalClose(e);
    const {itemId} = this.state;
    e.preventDefault();
    removeTaskFromList(itemId);
  }
  handleEditToggle(e) {
    e.preventDefault();
    const {editTaskToggle, setEditDetails, taskListItems} = this.props;
    const indexItemId = e.target.parentElement.getAttribute('data-index');
    const indexTaskDetail = taskListItems[indexItemId];
    setEditDetails(indexTaskDetail);
    editTaskToggle(true);
  }
  render() {
    const {taskListItems, isConfirmModalOpened} = this.props;
    const {isClosed} = this.state;
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
                  editFunc={::this.handleEditToggle}
                  taskItemDate={item.date}
                  taskItemDescription={item.details}
                  taskItemLocation={item.address}
                  dataIndex={index}
                  dataId={item.id}
                />
              );
            })
          }
        </ul>
        {
          isConfirmModalOpened &&
            <ConfirmModal
              addCls={isClosed ? 'active' : ''}
              handleNo={::this.handleModalClose}
              handleYes={::this.handleDelete}
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
  toggleConfirmModal: PropTypes.func,
  removeTaskFromList: PropTypes.func,
  editTaskToggle: PropTypes.func,
  setEditDetails: PropTypes.func
};

export default TaskList;
