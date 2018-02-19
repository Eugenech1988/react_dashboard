import React from 'react';
import loaderIcon from 'assets/icons/ReactHeart.svg';
import './style.scss';

const Loader = props => {
  return (
    <div className='loader'>
      <div className='loader__wrapper'>
        <img src={loaderIcon} alt='' className='loader__img'/>
      </div>
    </div>
  );
};

export default Loader;
