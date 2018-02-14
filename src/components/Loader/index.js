import React from 'react';
import loaderIcon from 'assets/icons/ReactHeart.svg';
import './style.scss';
import {Transition} from 'react-transition-group';

const Loader = props => {
  return (
    <div className='loader'>
      <Transition>
        <div className='loader__wrapper'>
          <img src={loaderIcon} alt='' className='loader__img'/>
        </div>
      </Transition>
    </div>
  );
};

export default Loader;
