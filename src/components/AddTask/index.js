import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import {togglePanel} from 'actions/toggleAction';
import plusIcon from 'assets/icons/plusIcon.svg';
import plusIconMobile from 'assets/icons/plusIcon__white.svg';
import {detectPhone} from 'helpers/helpers';

const mapStateToProps = state => ({
  isPanelOpened: state.togglers.isPanelOpened
});

const dispatchMapToProps = dispatch => ({
  togglePanel: () => dispatch(togglePanel())
});

@connect(mapStateToProps, dispatchMapToProps)
class AddTask extends Component {
  state = {
    isPhone: false
  };
  componentWillMount() {
    detectPhone() ? this.setState({isPhone: true}) : this.setState({isPhone: false});
    window.addEventListener('resize', this.setPhone);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.setPhone);
  }
  
  setPhone = () => {
    detectPhone() ? this.setState({isPhone: true}) : this.setState({isPhone: false});
  };
  handleClick(e) {
    const target = e.target;
    const {togglePanel, isPanelOpened} = this.props;
    togglePanel();
    if (!isPanelOpened)
      target.innerText = 'close panel';
    else
      target.innerText = 'new task';
  }
  
  render() {
    const {isPhone} = this.state;
    return (
      <div className='add-task__btn-wrap'>
        <button type='button' className='add-task__btn' onClick={::this.handleClick}>
          <img src={isPhone ? plusIcon : plusIconMobile} alt='' className='add-task__icon'/>
          next task
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
