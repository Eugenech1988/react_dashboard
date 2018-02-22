import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = props => {
  const {historyItemDate, historyItemDescription, historyItemLocation} = props;
  return (
    <div className='history-item'>
      <div className='history-item__wrapper'>
        <p className='history-item__date'>
          {historyItemDate}
        </p>
        <p className='history-item__description'>
          {historyItemDescription}
        </p>
        <div className='history-item__location'>
          {historyItemLocation}
        </div>
      </div>
    </div>
  );
};

History.propTypes = {
  historyItemDate: PropTypes.string,
  historyItemDescription: PropTypes.string,
  historyItemLocation: PropTypes.string
};

export default HistoryItem;
