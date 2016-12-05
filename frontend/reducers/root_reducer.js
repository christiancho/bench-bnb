import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import benchesReducer from './benches_reducer';
import filterReducer from './filter_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  benches: benchesReducer,
  filter: filterReducer
});

export default rootReducer;
