import * as BenchAPIUtil from '../util/bench_api_util';

export const RECEIVE_ALL_BENCHES = "RECEIVE_ALL_BENCHES";

export const receiveBenches = benches => {
  return {
    type: RECEIVE_ALL_BENCHES,
    benches
  };
};

export const fetchBenches = (filter) => {
  return (dispatch) => {
    return BenchAPIUtil.fetchBenches(filter)
      .then( benches => dispatch(receiveBenches(benches)) );
  };
};

export const createBench = bench => {
  return (dispatch) => {
    return BenchAPIUtil.sendBench(bench);
  };
};
