import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Map from 'components/Map';
import './style.scss';
import Loader from 'components/Loader';
import AddTask from 'components/AddTask';
import TaskPanel from 'components/TaskPanel';
import TaskList from 'components/TaskList';

const mapStateToProps = state => ({
  loading: state.loading
});

@connect(mapStateToProps)
class Dashboard extends React.Component {
  render() {
    const {loading} = this.props;
    return (
      <div className='dashboard-wrapper'>
        {!loading && <Loader/>}
        <Map/>
        {loading && <AddTask/>}
        {loading && <TaskPanel/>}
        {loading && <TaskList/>}
      </div>
    );
  }
}

Dashboard.propTypes = {
  loading: PropTypes.bool
};

export default Dashboard;
