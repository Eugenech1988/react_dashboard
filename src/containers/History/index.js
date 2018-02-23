import React from 'react';

import HistoryList from 'components/HistoryList';
import './style.scss';

const History = props => {
  return (
    <div className='history__wrap'>
      <HistoryList/>
    </div>
  );
};

export default History;
