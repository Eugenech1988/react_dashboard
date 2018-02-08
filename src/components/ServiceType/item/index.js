import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({

});

@connect(mapStateToProps, dispatchMapToProps)
class ServiceItem extends Component {
  render() {
    const {serviceImg, serviceNotify} = this.props;
    return (
      <li className='service__item'>
        <div className='service-img__wrapper'>
          <img src={serviceImg} alt='' className='service__img'/>
        </div>
        <p className='service__notify'>
          {serviceNotify}
        </p>
      </li>
    );
  };
}

ServiceItem.propTypes = {
  serviceImg: PropTypes.any,
  serviceNotify: PropTypes.string
};

export default ServiceItem;
