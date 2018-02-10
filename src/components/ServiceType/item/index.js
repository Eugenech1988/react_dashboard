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
    const {serviceImg, serviceNotify, serviceItemClick, dataIndex, itemIndex, activeItem} = this.props;
    return (
      // eslint-disable-next-line
      <li className={`service__item ${parseInt(itemIndex, 10) === parseInt(activeItem, 10) ? 'service__item--active' : ''}`} onClick={serviceItemClick} data-index={dataIndex}>
        <div className='service__img-wrapper'>
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
  serviceImg: PropTypes.string,
  serviceNotify: PropTypes.string,
  serviceItemClick: PropTypes.func,
  dataIndex: PropTypes.number,
  itemIndex: PropTypes.number,
  activeItem: PropTypes.string
};

export default ServiceItem;
