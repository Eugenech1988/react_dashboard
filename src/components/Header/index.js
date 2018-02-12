import React, {Component} from 'react';

import Logo from 'components/Logo';
import Nav from 'components/Nav';
import './style.scss';

class Header extends Component {
  state = {
    mobileMenuOpened: false
  };
  handleClick(e) {
    const {mobileMenuOpened} = this.state;
    e.preventDefault();
    console.log('clicked');
    this.setState({mobileMenuOpened: !mobileMenuOpened});
  }
  render() {
    const {mobileMenuOpened} = this.state;
    return (
      <div className='main-header'>
        <div className='main-header__wrapper'>
          <div className='content-container'>
            <div className='main-header__inner'>
              <button
                className='main-header__burger-btn'
                onClick={::this.handleClick}
              />
              <Logo/>
              <Nav opened={mobileMenuOpened}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
