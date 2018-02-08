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

const mapStateToProps = state => ({});

const dispatchMapToProps = dispatch => ({});

@connect(mapStateToProps, dispatchMapToProps)
class ServiceType extends Component {
  render() {
    return (
      <div className='service'>
        <div className='service__wrapper sidebar__wrapper'>
          <p className='service__heading sidebar__heading'>
            service type
          </p>
          <ul className='service__list'>
            <ServiceItem
              serviceImg={electricianImg}
              serviceNotify='Electrician'
            />
            <ServiceItem
              serviceImg={plumberImg}
              serviceNotify='Plumber'
            />
            <ServiceItem
              serviceImg={gardenImg}
              serviceNotify='Gardener'
            />
            <ServiceItem
              serviceImg={keeperImg}
              serviceNotify='Housekeeper'
            />
            <ServiceItem
              serviceImg={cookImg}
              serviceNotify='Cook'
            />
          </ul>
        </div>
      </div>
    );
  };
}

ServiceType.propTypes = {};

export default ServiceType;

