import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { fetchBenches } from '../actions/bench_actions';

const mapStateToProps = ({ benches }) => {
  return {
    benches
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBenches: () => dispatch(fetchBenches())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
