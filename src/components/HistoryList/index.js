import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import HistoryItem from './item';
import './style.scss';

const mapStateToProps = state => ({
  history: state.history
});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class HistoryList extends Component {
  render() {
    const listHistory = JSON.parse(localStorage.getItem('listHistory'));
    return (
      <ul className='history-list'>
        {
          listHistory &&
          listHistory.map((item, index) => {
            return (
              <HistoryItem
                key={index}
                historyItemDate={item.date}
                historyItemDescription={item.details}
                historyItemLocation={item.address}
              />
            );
          })
        }
      </ul>
    );
  };
}

HistoryList.propTypes = {
  history: PropTypes.array
};

export default HistoryList;
