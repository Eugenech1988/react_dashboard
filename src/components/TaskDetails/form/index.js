import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Field, reduxForm, change} from 'redux-form';

import Button from 'components/Button';

const mapStateToProps = state => ({
  taskAddress: state.taskPanel.taskAddress,
  serviceItemText: state.taskPanel.serviceItemText,
  availableTask: state.taskPanel.availableTask,
  taskDescription: state.taskPanel.taskDescription,
});

const dispatchMapToProps = dispatch => ({
  change: (field, value) => dispatch(change(field, value))
});

@connect(mapStateToProps)
class TaskDetailsForm extends Component {
  
  componentDidUpdate() {
    const {taskAddress, serviceItemText, availableTask, taskDescription, change} = this.props;
    const details = `I need ${serviceItemText} to ${availableTask}${taskDescription ? `, ${taskDescription}.` : '.'}`;
    const addressInput = this.refs.addressInput;
    const detailsInput = this.refs.detailsInput;
    if (addressInput.value !== taskAddress)
      change('address', taskAddress);
    if (detailsInput.value !== details)
      change('details', details);
  }
  
  render() {
    const {handleSubmit, availableTask} = this.props;
    return (
      <form name='taskDetails' onSubmit={handleSubmit} className='task-details__form'>
        <div className='task-details__input-wrap'>
          <label className='task-details__label' htmlFor='address'/>
          <Field className='task-details__input' name='address' ref='addressInput' component='input' type='text'/>
        </div>
        <div className='task-details__input-wrap'>
          <label className='task-details__label' htmlFor='details'/>
          <Field className='task-details__input' name='details' ref='detailsInput' component='input' type='text'/>
        </div>
        <div className='task-details__input-wrap'>
          <label className='task-details__label' htmlFor='id'/>
          <Field className='task-details__input' name='id' component='input' type='text'/>
        </div>
        <div className='task-details__input-wrap'>
          <label className='task-details__label' htmlFor='date'/>
          <Field className='task-details__input' name='date' component='input' type='text'/>
        </div>
        <Button
          type='submit'
          isDisabled={availableTask === ''}
          btnText='create project'
          aditionalCls='btn--confirm'
          // btnFunc={::this.handleSubmit}
        />
      </form>
    );
  }
}

TaskDetailsForm = reduxForm({
  form: 'taskDetails',
  initialValues: {
    'date': '',
    'id': 0
  }
})(TaskDetailsForm);

export default TaskDetailsForm;
