import * as BenchAPIUtil from '../util/bench_api_util';
import { receiveBenches } from './bench_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const changeBounds = bounds => {
  return {
    type: UPDATE_BOUNDS,
    bounds
  };
};

export function updateBounds(filter) {
  return ( dispatch, getState ) => {
    dispatch( changeBounds( filter ) );
    return BenchAPIUtil.fetchBenches( getState().filter )
      .then( benches => dispatch(receiveBenches(benches)) );
  };
}
