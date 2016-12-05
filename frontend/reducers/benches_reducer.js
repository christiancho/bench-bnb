import { RECEIVE_ALL_BENCHES } from '../actions/bench_actions';
import merge from 'lodash/merge';

const benchesReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_BENCHES:
      return action.benches;
    default:
      return state;
  }
};

export default benchesReducer;
