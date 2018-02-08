
import React from 'react';
import Routes from 'routes';

import Header from 'components/Header';

const App = props => {
  return (
    <div className='wrapper'>
      <Header/>
      <Routes/>
    </div>
  );
};

export default App;
