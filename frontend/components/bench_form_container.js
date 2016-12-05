import { connect } from 'react-redux';
import BenchForm from './bench_form';
import { createBench } from '../actions/bench_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    lat: ownProps.location.query.lat,
    lng: ownProps.location.query.lng
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBench: bench => dispatch(createBench(bench))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchForm);
