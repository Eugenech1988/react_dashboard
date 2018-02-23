import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import HistoryItem from './item';
import {setHistory} from 'actions/historyAction';
import './style.scss';

const mapStateToProps = state => ({
  history: state.history
});

@connect(mapStateToProps)
class HistoryList extends Component {
  render() {
    const {history} = this.props;
    return (
      <ul className='history-list'>
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
  history: PropTypes.array
};

export default HistoryList;
