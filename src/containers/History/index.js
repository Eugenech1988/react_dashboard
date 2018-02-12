import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class History extends Component {
  render() {
    return (
      <div className='history-wrap'>
      </div>
    );
  };
}

History.propTypes = {};

export default History;
