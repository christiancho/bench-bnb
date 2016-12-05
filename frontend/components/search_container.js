import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches } from '../actions/bench_actions';
import { updateBounds } from '../actions/filter_actions';

const mapStateToProps = ({ benches }) => {
  return {
    benches
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBenches: filter => dispatch(fetchBenches(filter)),
    updateBounds: bounds => dispatch(updateBounds(bounds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
