import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({

});

@connect(mapStateToProps, dispatchMapToProps)
class TaskItem extends Component {
  render() {
    return (
      <div className='task-item'>
        <div className='task-item__wrapper'>
          
        </div>
      </div>
    );
  };
}

TaskItem.propTypes = {

};

export default TaskItem;
