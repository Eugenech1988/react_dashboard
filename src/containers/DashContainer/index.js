import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Map from 'components/Map';
import './style.scss';
import Loader from 'components/Loader';
import AddTask from 'components/AddTask';
import TaskPanel from 'containers/TaskPanel';

const mapStateToProps = state => ({
  loading: state.loading
});

@connect(mapStateToProps)
class DashContainer extends React.Component {
  render() {
    const {loading} = this.props;
    return (
      <div className='content-wrapper'>
        {!loading &&
        <Loader/>
        }
        <Map/>
        <AddTask/>
        <TaskPanel/>
      </div>
    );
  }
}

DashContainer.propTypes = {
  loading: PropTypes.bool
};

export default DashContainer;
