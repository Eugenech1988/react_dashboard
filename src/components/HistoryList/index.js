import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import HistoryItem from './item';
import {setHistory} from 'actions/historyAction';
import './style.scss';

const mapStateToProps = state => ({
  history: state.history,
  isMapOpened: state.togglers.isMapOpened
});

@connect(mapStateToProps)
class HistoryList extends Component {
  render() {
    const {history, isMapOpened} = this.props;
    return (
      <ul className={`history-list ${isMapOpened ? 'hidden' : ''}`}>
        {
          history &&
          history.map((item, index) => {
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
  history: PropTypes.array,
  isMapOpened: PropTypes.bool
};

export default HistoryList;
