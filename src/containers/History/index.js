import React, {Component} from 'react';
import {connect} from 'react-redux';

import HistoryList from 'components/HistoryList';
import './style.scss';

class History extends Component {
  render() {
    return (
      <div className='history__wrap'>
        <HistoryList/>
      </div>
    );
  };
}

export default History;
