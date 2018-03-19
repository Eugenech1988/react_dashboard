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

const mapDispatchToProps = dispatch => ({
  setHistory: (data) => dispatch(setHistory(data))
});

@connect(mapStateToProps, mapDispatchToProps)
class HistoryList extends Component {
  componentWillMount() {
    const {setHistory} = this.props;
    const historyList = JSON.parse(localStorage.getItem('listHistory') || '[]');
    setHistory(historyList);
  }
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
  setHistory: PropTypes.func,
  isMapOpened: PropTypes.bool
};

export default HistoryList;
