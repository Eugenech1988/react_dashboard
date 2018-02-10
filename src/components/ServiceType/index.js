import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import ServiceItem from './item';
import electricianImg from 'assets/icons/noun_321339_cc.svg';
import plumberImg from 'assets/icons/noun_321315_cc.svg';
import gardenImg from 'assets/icons/noun_321363_cc.svg';
import keeperImg from 'assets/icons/noun_321399_cc.svg';
import cookImg from 'assets/icons/noun_321395_cc.svg';
import {setActiveServiceItem} from 'actions/taskDetailsAction';

const serviceItems = [
  {
    serviceImg: electricianImg,
    serviceText: 'Electrician'
  },
  {
    serviceImg: plumberImg,
    serviceText: 'Plumber'
  },
  {
    serviceImg: gardenImg,
    serviceText: 'Gardener'
  },
  {
    serviceImg: keeperImg,
    serviceText: 'Housekeeper'
  },
  {
    serviceImg: cookImg,
    serviceText: 'Cooking'
  }
];

const mapStateToProps = state => ({
  activeItem: state.taskPanel.serviceItemIndex
});

const dispatchMapToProps = dispatch => ({
  setActiveServiceItem: (index, text) => dispatch(setActiveServiceItem(index, text))
});

@connect(mapStateToProps, dispatchMapToProps)
class ServiceType extends Component {
  state = {
    activeItem: ''
  };
  handleClick(e) {
    e.stopPropagation();
    const target = e.target;
    const {setActiveServiceItem} = this.props;
    let index;
    let text;
    if (target.tagName === 'LI') {
      index = target.getAttribute('data-index');
    } else if (target.tagName === 'DIV') {
      index = target.parentElement.getAttribute('data-index');
      text = target.nextSibling.innerText;
    } else if (target.tagName === 'P') {
      index = target.parentElement.getAttribute('data-index');
      text = target.innerText;
    } else if (target.tagName === 'IMG') {
      index = target.parentElement.parentElement.getAttribute('data-index');
      text = target.parentElement.nextSibling.innerText;
    }
    setActiveServiceItem(text);
    this.setState({activeItem: index});
  }
  render() {
    const {activeItem} = this.state;
    return (
      <div className='service'>
        <div className='service__wrapper sidebar__wrapper'>
          <p className='service__heading sidebar__heading'>
            service type
          </p>
          <ul className='service__list'>
            {
              serviceItems.map((item, index) => {
                return (
                  <ServiceItem
                    serviceItemClick={::this.handleClick}
                    serviceImg={item.serviceImg}
                    serviceNotify={item.serviceText}
                    key={index}
                    activeItem={activeItem}
                    itemIndex={index}
                    dataIndex={index}
                  />
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  };
}

ServiceType.propTypes = {
  serviceItemIndex: PropTypes.string
};

export default ServiceType;

